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
      gardeLede: 'Une architecture sobre et réversible, pensée pour durer et changer d’usage.\nTransformer l’existant, réemployer, privilégier les ressources du territoire.\nPour des maîtres d’ouvrage publics, privés ou associatifs.',
      indexLede: 'Opérations récentes, du diagnostic à la livraison.',
      atelier: 'Atelier',
      suivre: 'Suivre',
      voir: 'Voir les projets',
      projets: 'Projets',
      projet: 'Projet',
      lieu: 'Lieu',
      surface: 'Surface',
      statut: 'Statut',
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
      gardeLede: 'Reversible architecture, made to last and to change use.\nTransforming what already stands, reusing, favouring local resources.\nFor public, private and non-profit clients.',
      indexLede: 'Recent operations, from survey to completion.',
      atelier: 'Studio',
      suivre: 'Follow',
      voir: 'View projects',
      projets: 'Projects',
      projet: 'Project',
      lieu: 'Place',
      surface: 'Area',
      statut: 'Status',
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
    listView: true, /* fixé au chargement par vueParDefaut() */
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
    var dernierChamp = null;

    text.split(/\r?\n/).forEach(function (line) {
      if (/^\s*#/.test(line)) return;

      /* Une ligne vide cl\u00f4t le champ en cours : ce qui suit ne peut plus s'y
         rattacher par m\u00e9garde. */
      if (!line.trim()) { dernierChamp = null; return; }

      var i = line.indexOf(':');

      /* Pas de \u00ab cl\u00e9: \u00bb : c'est la suite du champ pr\u00e9c\u00e9dent. Une longue liste
         de photos peut ainsi s'\u00e9crire sur autant de lignes qu'on veut, et un
         texte se poursuivre \u00e0 la ligne. */
      if (i < 1) {
        /* on garde la marque du retour à la ligne : pour les photos, elle
           sépare deux noms aussi sûrement qu'une virgule, ce qui évite qu'un
           oubli de ponctuation ne colle deux fichiers en un seul */
        if (dernierChamp) f[dernierChamp] += '\n' + line.trim();
        return;
      }

      var key = line.slice(0, i).trim().toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      f[key] = line.slice(i + 1).trim();
      dernierChamp = key;
    });
    if (!f.titre) return null;

    /* Hors photos, un champ écrit sur plusieurs lignes se relit d'un trait. */
    Object.keys(f).forEach(function (k) {
      if (k !== 'photo') f[k] = f[k].replace(/\s*\n\s*/g, ' ');
    });
    return {
      number: String(position).padStart(2, '0'),
      title: f.titre,
      place: f.lieu || DASH,
      year: f.annee || DASH,
      programme: f.programme || '',
      surface: f.surface || DASH,
      statut: f.statut || DASH,
      /* Largeur de la vignette sur la grille, comptée en colonnes. Absent,
         illisible ou inférieur à 1, on retombe sur 1 : le comportement de
         tous les projets saisis jusqu'ici ne change pas. */
      taille: Math.max(parseInt(f.taille, 10) || 1, 1),
      /* Une ou plusieurs photos, séparées par une virgule ou un point-virgule.
         Une seule valeur donne un tableau d'un élément : rien ne change pour
         les projets déjà saisis. */
      photos: (f.photo || '').split(/[,;\n]/)
        .map(function (n) { return n.trim(); })
        .filter(Boolean)
        .map(function (n) { return 'photos/' + n; }),
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

  /* Projet dont l'aperçu est ouvert, et rang de la photo affichée : c'est ce
     couple qui permet à un second clic de passer à la photo suivante plutôt
     que de rouvrir la première. */
  var apercuProjet = null;
  var apercuIndex = 0;

  function montrerApercu(p, index) {
    var box = document.getElementById('mk-preview');
    if (!box || !p.photos.length) return;
    var img = box.querySelector('img');
    var compteur = box.querySelector('.mk-preview__compteur');
    var src = p.photos[index];

    apercuProjet = p.number;
    apercuIndex = index;

    if (compteur) {
      compteur.textContent = p.photos.length > 1
        ? (index + 1) + ' / ' + p.photos.length
        : '';
    }

    if (img.getAttribute('src') !== src) {
      box.classList.remove('is-visible');
      img.onload = function () {
        /* on n'affiche que si cette photo est toujours celle demandée */
        if (img.getAttribute('src') === src && apercuProjet === p.number) {
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

  /* Un clic ou un toucher sur une ligne déjà ouverte avance d'une photo.
     Arrivé au bout : on boucle à la souris, où l'aperçu se referme de toute
     façon en quittant la ligne ; on referme au doigt, où c'est la seule
     manière de s'en sortir sans viser ailleurs. */
  function avancerApercu(p) {
    if (!p.photos.length) return;
    if (apercuProjet !== p.number) return montrerApercu(p, 0);

    var suivant = apercuIndex + 1;
    if (suivant >= p.photos.length) {
      if (!survolFin) return masquerApercu();
      suivant = 0;
    }
    montrerApercu(p, suivant);
  }

  function masquerApercu() {
    var box = document.getElementById('mk-preview');
    apercuProjet = null;
    apercuIndex = 0;
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
      row.appendChild(el('span', 'mk-row__data mk-col-large', p.surface));
      row.appendChild(el('span', 'mk-row__data mk-row__statut mk-col-large', p.statut));
      row.appendChild(el('span', 'mk-row__year', p.year));

      if (p.photos.length) {
        /* Une seule photo : le survol l'affiche déjà, le clic n'apporte rien
           et ne doit donc rien annoncer. */
        if (p.photos.length > 1) row.classList.add('mk-row--cliquable');
        if (survolFin) {
          row.addEventListener('mouseenter', function () { montrerApercu(p, 0); });
          row.addEventListener('mouseleave', masquerApercu);
        }
        /* Le clic sert dans les deux cas : à la souris il fait défiler les
           photos, au doigt il ouvre puis fait défiler. */
        row.addEventListener('click', function (e) {
          e.stopPropagation();
          avancerApercu(p);
        });
      }

      host.appendChild(row);
    });
  }

  /* Carrousel d'une carte de la grille.
     Le balayage au doigt est celui du navigateur : un conteneur qui défile
     horizontalement, avec scroll-snap pour qu'il s'arrête pile sur une photo.
     Rien à programmer pour le geste, et l'inertie d'iOS est conservée.
     À la souris, un clic avance d'une photo. */
  function construireCarrousel(p) {
    var frame = el('div', 'mk-card__shots');
    frame.setAttribute('role', 'group');

    p.photos.forEach(function (src, i) {
      var img = document.createElement('img');
      img.src = src;
      img.alt = p.photos.length > 1
        ? p.title + ' — photo ' + (i + 1) + ' sur ' + p.photos.length
        : p.title;
      img.loading = i === 0 ? 'eager' : 'lazy';
      img.draggable = false;

      /* Quand aucun format n'est imposé, c'est la première photo qui donne le
         sien au cadre ; les suivantes s'y conforment, faute de quoi la carte
         changerait de hauteur à chaque balayage. */
      if (i === 0) {
        var caler = function () {
          if (!img.naturalWidth) return;
          var impose = getComputedStyle(frame).aspectRatio;
          if (!impose || impose === 'auto') {
            frame.style.aspectRatio = img.naturalWidth + ' / ' + img.naturalHeight;
          }
          /* La hauteur de la vignette vient de changer : toute la grille
             doit être recomposée, les suivantes s'appuient dessus. */
          recomposer();
        };
        if (img.complete) caler(); else img.addEventListener('load', caler);
        img.addEventListener('error', recomposer);
      }
      frame.appendChild(img);
    });

    if (p.photos.length > 1) {
      frame.addEventListener('click', function () {
        var largeur = frame.clientWidth;
        var dernier = frame.scrollWidth - largeur - 2;
        frame.scrollTo({
          left: frame.scrollLeft >= dernier ? 0 : frame.scrollLeft + largeur,
          behavior: 'smooth'
        });
      });
    }
    return frame;
  }

  /* ------------------------------------------------- composition de la grille

     Les vignettes ne sont plus posées en rangées : chacune remonte jusqu'à
     buter sur ce qui la précède, de sorte qu'il ne reste pas de blanc sous
     les plus courtes. Aucune mise en page du navigateur ne sait faire cela —
     ni une grille CSS, ni des blocs qui se replient ne remontent quoi que ce
     soit — donc le calcul est fait ici et chaque vignette est posée à sa
     place exacte.

     Tout repose sur une trame de colonnes fines et invisibles. Une vignette
     de référence en occupe --vignette-colonnes (4 par défaut) ; chaque cran
     du champ « taille: » en ajoute une. Cette trame est indispensable :
     elle donne aux vignettes des bords communs. Sans elle, une vignette
     empiéterait de quelques pixels sur une haute voisine du dessus et se
     retrouverait bloquée par une image qui ne la concerne pas.

     On garde le bas atteint par chacune des colonnes. Chaque vignette va se
     poser à l'endroit le plus haut où elle tient ; à hauteur égale, le plus
     à gauche, pour rester au plus près de l'ordre de projets.txt.

     Deux choses à savoir, et qui ne sont pas des défauts de ce code mais la
     nature même de cette mise en page :
       — tous les blancs ne disparaissent pas. Une vignette ne monte que si
         rien ne la surplombe sur toute sa largeur ;
       — le bas de la composition est irrégulier, les colonnes ne finissant
         pas à la même hauteur. */

  function reglagesGrille() {
    var cs = getComputedStyle(document.documentElement);
    var base = parseFloat(cs.getPropertyValue('--vignette-base'));
    var unite = parseInt(cs.getPropertyValue('--vignette-colonnes'), 10);
    return {
      base: isFinite(base) && base > 0 ? base : 280,
      unite: isFinite(unite) && unite > 0 ? unite : 4
    };
  }

  function composerGrille() {
    var grid = document.getElementById('mk-grid');
    if (!grid || grid.hidden) return;
    var cartes = Array.prototype.slice.call(grid.children);
    if (!cartes.length) { grid.style.height = ''; return; }

    var r = reglagesGrille();
    var cs = getComputedStyle(grid);
    var ecartX = parseFloat(cs.columnGap) || 0;
    var ecartY = parseFloat(cs.rowGap) || 0;
    var largeur = grid.clientWidth;
    if (!largeur) return;

    var parRangee = Math.max(1, Math.floor((largeur + ecartX) / (r.base + ecartX)));
    var colonnes = parRangee * r.unite;
    var pas = (largeur + ecartX) / colonnes;

    var bas = [];
    for (var i = 0; i < colonnes; i++) bas.push(0);

    /* Première rangée : avec peu de projets, le placement « le plus haut,
       puis le plus à gauche » empile tout à gauche et laisse une bande
       blanche à droite sur toute la hauteur. Tant qu'il reste des colonnes
       jamais couvertes, la vignette se pose donc sur la première d'entre
       elles — calée sur le bord droit si elle n'y tient pas. */
    var couvertes = 0;

    cartes.forEach(function (card) {
      var taille = parseInt(card.getAttribute('data-taille'), 10);
      if (!isFinite(taille) || taille < 1) taille = 1;
      var span = Math.min(r.unite + (taille - 1), colonnes);
      var posX = 0, posY = Infinity;
      if (couvertes < colonnes) {
        posX = Math.min(couvertes, colonnes - span);
        posY = 0;
        for (var k0 = posX; k0 < posX + span; k0++) if (bas[k0] > posY) posY = bas[k0];
      } else {
        for (var c = 0; c + span <= colonnes; c++) {
          var y = 0;
          for (var k = c; k < c + span; k++) if (bas[k] > y) y = bas[k];
          if (y < posY - 0.5) { posY = y; posX = c; }
        }
      }
      couvertes = Math.max(couvertes, posX + span);
      card.style.left = (posX * pas).toFixed(2) + 'px';
      card.style.top = posY.toFixed(2) + 'px';
      card.style.width = (span * pas - ecartX).toFixed(2) + 'px';
      var fond = posY + card.offsetHeight + ecartY;
      for (var k2 = posX; k2 < posX + span; k2++) bas[k2] = fond;
    });

    var hauteur = 0;
    bas.forEach(function (v) { if (v > hauteur) hauteur = v; });
    grid.style.height = Math.max(0, hauteur - ecartY).toFixed(2) + 'px';
  }

  /* Un seul recalcul pour une rafale d'images qui se chargent. */
  var minuteurCompo = null;
  function recomposer() {
    clearTimeout(minuteurCompo);
    minuteurCompo = setTimeout(composerGrille, 60);
  }

  function renderGrid(shown) {
    var host = document.getElementById('mk-grid');
    if (!host) return;
    host.textContent = '';

    shown.forEach(function (p) {
      var card = el('div');
      card.setAttribute('data-taille', p.taille);

      if (p.photos.length) {
        card.appendChild(construireCarrousel(p));
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

      var sub = el('div', 'mk-meta mk-card__sub');
      sub.appendChild(el('span', null, p.programme ? p.place + ' · ' + p.programme : p.place));

      /* Compteur : sans lui, rien n'indique qu'un projet a plusieurs vues. */
      if (p.photos.length > 1) {
        var compteur = el('span', 'mk-card__compteur', '1 / ' + p.photos.length);
        sub.appendChild(compteur);

        var shots = card.querySelector('.mk-card__shots');
        shots.addEventListener('scroll', function () {
          var rang = Math.round(shots.scrollLeft / shots.clientWidth) + 1;
          rang = Math.min(Math.max(rang, 1), p.photos.length);
          compteur.textContent = rang + ' / ' + p.photos.length;
        }, { passive: true });
      }
      card.appendChild(sub);

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

    /* Après l'affichage seulement : une grille masquée n'a pas de largeur. */
    composerGrille();
  }

  /* Le nombre de colonnes dépend de la largeur de la fenêtre : la grille se
     recompose au redimensionnement, et au passage en paysage sur téléphone. */
  window.addEventListener('resize', recomposer);

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

  /* Vue d'ouverture : la liste sur grand écran, la grille en dessous. Même
     seuil que les colonnes Surface et Statut dans la feuille de style — un
     seul point de bascule pour toute la page. Un changement de taille de
     fenêtre en cours de route ne rebascule rien : le visiteur a pu choisir
     sa vue entre-temps, ce n'est pas à nous de la lui reprendre. */
  var PETIT_ECRAN = '(max-width: 960px)';

  function vueParDefaut() {
    if (!window.matchMedia) return true;
    return !window.matchMedia(PETIT_ECRAN).matches;
  }

  /* Curseur en négatif, à la souris seulement. La feuille de style reste
     seule juge de ce qui est cliquable : une fois la classe posée, les zones
     cliquables ont « cursor: none », et c'est là que le disque s'affiche. */
  function installerCurseur() {
    if (!survolFin || !window.matchMedia) return;

    var disque = document.createElement('div');
    disque.className = 'mk-curseur';
    disque.setAttribute('aria-hidden', 'true');
    document.body.appendChild(disque);
    document.documentElement.classList.add('mk-curseur-js');

    var cible = null;
    document.addEventListener('mousemove', function (e) {
      disque.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
      if (e.target !== cible) {
        cible = e.target;
        var actif = cible.nodeType === 1 && getComputedStyle(cible).cursor === 'none';
        disque.classList.toggle('mk-curseur--visible', actif);
      }
    }, { passive: true });

    document.documentElement.addEventListener('mouseleave', function () {
      cible = null;
      disque.classList.remove('mk-curseur--visible');
    });
  }

  function init() {
    installerCurseur();
    state.lang = readStoredLang();
    state.listView = vueParDefaut();

    var toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) {
      toggle.addEventListener('click', function () {
        setLang(state.lang === 'FR' ? 'EN' : 'FR');
      });
    }

    var view = document.getElementById('mk-view');
    if (view) {
      /* L'interrupteur doit refléter la vue retenue, sinon son curseur
         annoncerait l'inverse de ce qui est affiché. */
      view.checked = state.listView;
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
