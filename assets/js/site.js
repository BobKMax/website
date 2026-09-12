/* Maxime Kreiter Architecte — logique du site.
   Deux responsabilités : la bascule FR/EN, et la lecture de projets.txt
   (un bloc par projet, séparés par ---) pour construire l'index.
   Aucune dépendance, aucune étape de build. */

(function () {
  'use strict';

  var DASH = '—';
  var LANG_KEY = 'mk-lang';
  var SOURCE = 'projets.txt';

  /* ------------------------------------------------------------- textes */

  var COPY = {
    FR: {
      gardeLede: 'Atelier d’architecture basé à Lyon.\nRéhabilitation, équipement public. Le travail porte sur ce qui existe déjà : structures conservées, matières locales, interventions mesurées.',
      indexLede: 'Opérations récentes, du diagnostic à la livraison.',
      atelier: 'Atelier',
      suivre: 'Suivre',
      voir: 'Voir les projets',
      garde: 'Garde',
      projets: 'Projets',
      projet: 'Projet',
      lieu: 'Lieu',
      annee: 'Année',
      liste: 'Vue liste',
      grille: 'Vue grille',
      tous: 'Tous',
      photo: 'Photo',
      vide: 'Aucun projet dans le fichier projets.txt. Le mode d’emploi est en haut de ce fichier.',
      videFiltre: 'Aucun projet pour ce filtre.',
      videFichier: 'Les projets se lisent dans le fichier projets.txt, ce qui demande une adresse http://. Ouvrez le site depuis son hébergeur ou un serveur local plutôt qu’en double-cliquant le fichier.'
    },
    EN: {
      gardeLede: 'Architecture practice based in Lyon.\nRehabilitation, public buildings. The work starts from what is already there: retained structures, local materials, measured interventions.',
      indexLede: 'Recent operations, from survey to completion.',
      atelier: 'Studio',
      suivre: 'Follow',
      voir: 'View projects',
      garde: 'Cover',
      projets: 'Projects',
      projet: 'Project',
      lieu: 'Place',
      annee: 'Year',
      liste: 'List view',
      grille: 'Grid view',
      tous: 'All',
      photo: 'Photo',
      vide: 'No project found in projets.txt.',
      videFiltre: 'No project under this filter.',
      videFichier: 'Projects are read from projets.txt, which requires an http:// address. Open the site from its host or a local server rather than by double-clicking the file.'
    }
  };

  var state = {
    lang: 'FR',
    filter: 'Tous',
    listView: false,
    projects: [],
    loaded: false,
    fileProtocol: false
  };

  function t() {
    return COPY[state.lang] || COPY.FR;
  }

  /* ------------------------------------------------------------ lecture */

  /* Un bloc = des lignes « clé: valeur ». Les clés sont normalisées
     (accents et casse ignorés) pour rester tolérantes à la saisie ; les
     lignes commençant par # sont des commentaires. Un bloc sans titre —
     l'en-tête du fichier, le modèle à copier — est écarté. */
  function parseBloc(text, position) {
    var f = {};
    text.split(/\r?\n/).forEach(function (line) {
      if (/^\s*#/.test(line)) return;
      var i = line.indexOf(':');
      if (i < 1) return;
      var key = line.slice(0, i).trim().toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      f[key] = line.slice(i + 1).trim();
    });
    if (!f.titre) return null;
    return {
      number: String(position).padStart(2, '0'),
      title: f.titre,
      place: f.lieu || DASH,
      year: f.annee || DASH,
      programme: f.programme || '',
      surface: f.surface || DASH,
      photo: f.photo ? 'photos/' + f.photo : '',
      text: f.texte || ''
    };
  }

  /* Un seul fichier, donc une seule requête. L'ordre des blocs est l'ordre
     du site et donne les références 01, 02… Un hébergeur qui répond 200
     avec une page d'erreur HTML est rattrapé par le test sur « < ». */
  function loadProjects() {
    return fetch(SOURCE, { cache: 'no-store' })
      .then(function (res) { return res.ok ? res.text() : ''; })
      .then(function (body) {
        if (!body || /^\s*</.test(body)) return [];
        var out = [];
        body.split(/^[ \t]*-{3,}[ \t]*$/m).forEach(function (bloc) {
          var fiche = parseBloc(bloc, out.length + 1);
          if (fiche) out.push(fiche);
        });
        return out;
      })
      .catch(function () { return []; });
  }

  /* -------------------------------------------------------------- rendu */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function programmes() {
    var list = [];
    state.projects.forEach(function (p) {
      if (p.programme && list.indexOf(p.programme) < 0) list.push(p.programme);
    });
    return list;
  }

  function activeFilter() {
    var known = programmes();
    return state.filter !== 'Tous' && known.indexOf(state.filter) < 0
      ? 'Tous'
      : state.filter;
  }

  function shownProjects() {
    var active = activeFilter();
    return active === 'Tous'
      ? state.projects
      : state.projects.filter(function (p) { return p.programme === active; });
  }

  function renderFilters() {
    var host = document.getElementById('mk-filters');
    if (!host) return;
    var active = activeFilter();
    var labels = [t().tous].concat(programmes());

    host.textContent = '';
    labels.forEach(function (label, i) {
      var value = i === 0 ? 'Tous' : label;
      var btn = el('button', 'mk-tag', label);
      btn.type = 'button';
      btn.setAttribute('aria-pressed', active === value ? 'true' : 'false');
      btn.addEventListener('click', function () {
        state.filter = value;
        render();
      });
      host.appendChild(btn);
    });
  }

  /* Aperçu au survol : une seule image, réutilisée d'une ligne à l'autre.
     Elle n'apparaît qu'une fois chargée, pour éviter un cadre vide au premier
     survol. Un projet sans photo n'affiche rien. */

  var survolFin = !window.matchMedia ||
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  var apercuAffiche = null; /* src en cours, pour qu'un second toucher referme */

  function montrerApercu(src) {
    var box = document.getElementById('mk-preview');
    if (!box) return;
    var img = box.querySelector('img');
    apercuAffiche = src;

    if (img.getAttribute('src') !== src) {
      box.classList.remove('is-visible');
      img.onload = function () {
        if (img.getAttribute('src') === src && apercuAffiche === src) {
          box.classList.add('is-visible');
        }
      };
      img.onerror = function () { box.classList.remove('is-visible'); };
      img.setAttribute('src', src);
      if (img.complete && img.naturalWidth > 0) box.classList.add('is-visible');
    } else {
      box.classList.add('is-visible');
    }
  }

  function masquerApercu() {
    var box = document.getElementById('mk-preview');
    apercuAffiche = null;
    if (box) box.classList.remove('is-visible');
  }

  function renderRows(shown) {
    var host = document.getElementById('mk-rows');
    if (!host) return;
    host.textContent = '';
    shown.forEach(function (p) {
      var row = el('div', 'mk-row');
      row.appendChild(el('span', 'mk-row__number', p.number));
      row.appendChild(el('span', 'mk-row__title', p.title));
      row.appendChild(el('span', 'mk-row__meta', p.place));
      row.appendChild(el('span', 'mk-row__year', p.year));

      if (p.photo) {
        if (survolFin) {
          row.addEventListener('mouseenter', function () { montrerApercu(p.photo); });
          row.addEventListener('mouseleave', masquerApercu);
        } else {
          /* Tactile : un toucher ouvre l'aperçu, un second le referme. */
          row.addEventListener('click', function (e) {
            e.stopPropagation();
            if (apercuAffiche === p.photo) masquerApercu();
            else montrerApercu(p.photo);
          });
        }
      }

      host.appendChild(row);
    });
  }

  function renderGrid(shown) {
    var host = document.getElementById('mk-grid');
    if (!host) return;
    host.textContent = '';

    shown.forEach(function (p) {
      var card = el('div');

      if (p.photo) {
        var frame = el('div', 'mk-card__photo');
        var img = document.createElement('img');
        img.src = p.photo;
        img.alt = p.title;
        img.loading = 'lazy';
        frame.appendChild(img);
        card.appendChild(frame);
      } else {
        var figure = el('figure', 'mk-frame');
        var block = el('div', 'mk-frame__block');
        block.appendChild(el('span', 'mk-frame__label', t().photo + ' — ' + p.title));
        figure.appendChild(block);
        card.appendChild(figure);
      }

      var line = el('div', 'mk-card__line');
      line.appendChild(el('span', 'mk-card__title', p.title));
      line.appendChild(el('span', 'mk-meta mk-card__year', p.year));
      card.appendChild(line);

      var sub = p.programme ? p.place + ' · ' + p.programme : p.place;
      card.appendChild(el('div', 'mk-meta mk-card__sub', sub));

      host.appendChild(card);
    });
  }

  function emptyMessage() {
    if (state.fileProtocol) return t().videFichier;
    return state.projects.length === 0 ? t().vide : t().videFiltre;
  }

  function render() {
    var grid = document.getElementById('mk-grid');
    if (!grid) return; // page de garde

    var list = document.getElementById('mk-list');
    var empty = document.getElementById('mk-empty');
    var shown = shownProjects();
    var nothing = state.loaded && shown.length === 0;

    masquerApercu(); /* la liste est reconstruite : plus de ligne survolée */

    renderFilters();
    renderRows(shown);
    renderGrid(shown);

    /* L'interrupteur annonce la vue vers laquelle il bascule. */
    var etiquette = document.getElementById('mk-view-label');
    if (etiquette) etiquette.textContent = state.listView ? t().grille : t().liste;

    list.hidden = nothing || !state.listView;
    grid.hidden = nothing || state.listView;

    empty.hidden = !nothing;
    if (nothing) empty.textContent = emptyMessage();
  }

  /* ------------------------------------------------------------- langue */

  function readStoredLang() {
    try {
      return localStorage.getItem(LANG_KEY) === 'EN' ? 'EN' : 'FR';
    } catch (e) {
      return 'FR';
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) { /* navigation privée, stockage bloqué : sans conséquence */ }
  }

  function applyLang() {
    var copy = t();

    document.documentElement.lang = state.lang === 'EN' ? 'en' : 'fr';

    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      if (copy[key] !== undefined) node.textContent = copy[key];
    });

    /* Le bouton annonce la langue vers laquelle il bascule, pas la langue
       courante : en français il affiche « EN ». */
    var toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      var cible = state.lang === 'FR' ? 'EN' : 'FR';
      toggle.textContent = cible;
      toggle.setAttribute('aria-label',
        cible === 'EN' ? 'Switch to English' : 'Passer en français');
    }

    render();
  }

  function setLang(lang) {
    state.lang = lang === 'EN' ? 'EN' : 'FR';
    storeLang(state.lang);
    applyLang();
  }

  /* --------------------------------------------------------------- init */

  function init() {
    state.lang = readStoredLang();

    var toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      toggle.addEventListener('click', function () {
        setLang(state.lang === 'FR' ? 'EN' : 'FR');
      });
    }

    var view = document.getElementById('mk-view');
    if (view) {
      view.addEventListener('change', function () {
        state.listView = view.checked;
        render();
      });
    }

    /* Tactile : refermer l'aperçu en touchant ailleurs ou en faisant défiler. */
    if (!survolFin) {
      document.addEventListener('click', masquerApercu);
      window.addEventListener('scroll', masquerApercu, { passive: true });
    }

    applyLang();

    if (!document.getElementById('mk-grid')) return;

    if (location.protocol === 'file:') {
      state.fileProtocol = true;
      state.loaded = true;
      render();
      return;
    }

    loadProjects().then(function (projects) {
      state.projects = projects;
      state.loaded = true;
      render();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
