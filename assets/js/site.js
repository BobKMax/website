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
      /* Décalage vertical imposé, en pour cent de la largeur de la vignette.
         Absent, le projet en reçoit un automatiquement ; écrire 0 le remet
         franchement en haut de sa rangée. D'où la distinction entre « vide »
         et « zéro », que null porte ici. */
      decalage: f.decalage === undefined || f.decalage === ''
        ? null
        : (parseFloat(f.decalage.replace(',', '.')) || 0),
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
        };
        if (img.complete) caler(); else img.addEventListener('load', caler);
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

  /* Largeur des vignettes — champ « taille: » de projets.txt.
     Chaque vignette reçoit un poids : 1 pour taille 1, puis un pas par
     cran — 1,25 pour taille 2 si le pas vaut 0,25. Ce poids sert deux fois,
     et c'est ce qui rend les largeurs exactement proportionnelles :
       — en largeur de départ (poids × largeur de référence), qui décide du
         moment où la rangée se replie ;
       — en part du partage de la place restante.
     Les deux réglages sont dans le bloc :root de site.css, pas ici : c'est
     là que se règle l'apparence. */

  function reglagesTailles() {
    var cs = getComputedStyle(document.documentElement);
    var base = parseFloat(cs.getPropertyValue('--vignette-base'));
    var pas = parseFloat(cs.getPropertyValue('--taille-pas'));
    var dec = parseFloat(cs.getPropertyValue('--decalage'));
    return {
      base: isFinite(base) && base > 0 ? base : 280,
      pas: isFinite(pas) && pas >= 0 ? pas : 0.25,
      decalage: isFinite(dec) && dec >= 0 ? dec : 0
    };
  }

  function poidsDe(card, pas) {
    var taille = parseInt(card.getAttribute('data-taille'), 10);
    if (!isFinite(taille) || taille < 1) taille = 1;
    return 1 + (taille - 1) * pas;
  }

  /* Décalage vertical d'une vignette, exprimé en fraction de sa propre
     largeur — ainsi il grandit avec l'image et reste juste à toutes les
     tailles d'écran.
     Un projet qui porte un champ « decalage: » dans projets.txt impose le
     sien. Sinon il en reçoit un, tiré de son numéro de projet : le calcul
     est toujours le même pour un projet donné, donc la composition ne bouge
     pas d'une visite à l'autre ni au redimensionnement — ce ne serait pas
     une composition mais un clignotement. */
  function decalageDe(card, amplitude) {
    var ecrit = card.getAttribute('data-decalage');
    if (ecrit !== null && ecrit !== '') {
      var v = parseFloat(ecrit);
      return isFinite(v) ? v / 100 : 0;
    }
    if (!amplitude) return 0;
    var rang = parseInt(card.getAttribute('data-rang'), 10) || 0;
    /* Suite du nombre d'or : en multipliant le rang par 0,618… et en ne
       gardant que la partie décimale, on obtient des valeurs bien réparties
       entre 0 et 1, et surtout jamais deux voisines pour deux projets qui se
       suivent — ce qui arriverait avec un simple reste de division, et
       donnerait une rangée presque alignée. */
    return ((rang * 0.6180339887) % 1) * amplitude;
  }

  /* Rangées telles que le navigateur les a repliées : les vignettes d'une
     même rangée partagent la même position haute, tant qu'aucun décalage
     n'est posé. D'où l'ordre des opérations : largeurs, puis mesure, puis
     décalages. */
  function rangeesDe(cartes) {
    var lignes = [];
    var courante = null;
    var hautCourant = null;
    cartes.forEach(function (c) {
      if (c.offsetTop !== hautCourant) {
        courante = [];
        lignes.push(courante);
        hautCourant = c.offsetTop;
      }
      courante.push(c);
    });
    return lignes;
  }

  function composerGrille() {
    var grid = document.getElementById('mk-grid');
    if (!grid || grid.hidden) return;

    var r = reglagesTailles();
    var cartes = Array.prototype.slice.call(grid.children);
    if (!cartes.length) return;

    var ecart = parseFloat(getComputedStyle(grid).columnGap) || 0;

    /* Les décalages de la fois précédente fausseraient la lecture des
       rangées : on repart d'une grille alignée. */
    cartes.forEach(function (c) { c.style.marginTop = ''; });

    /* Plafond : une vignette ne doit jamais être assez large pour occuper
       seule une rangée — il faut qu'il reste de quoi en poser une petite à
       côté. Sans ce garde-fou, un « taille: 40 » saisi par erreur pousserait
       sa voisine sur la rangée précédente, qui s'étirerait pour rien. */
    var plafond = Math.max(1, (grid.clientWidth - r.base - ecart) / r.base);

    cartes.forEach(function (card) {
      var poids = Math.min(poidsDe(card, r.pas), plafond);
      card.style.flex = poids + ' 1 ' + (poids * r.base) + 'px';
      card.setAttribute('data-poids', poids);
    });

    /* La dernière rangée est rarement pleine : s'il y reste la place d'une
       vignette entière, c'est qu'on a manqué de projets, pas de place. On
       l'étirerait alors pour rien — un projet seul deviendrait une image
       pleine largeur. Dans ce cas seulement, ses vignettes gardent leur
       largeur de départ et la rangée reste calée à gauche.
       Mesurer suppose la mise en page faite : d'où la lecture des positions
       après avoir posé les largeurs. */
    var lignes = rangeesDe(cartes);
    var derniere = lignes[lignes.length - 1];

    if (lignes.length > 1) {
      var occupe = ecart * (derniere.length - 1);
      derniere.forEach(function (c) {
        occupe += parseFloat(c.getAttribute('data-poids')) * r.base;
      });
      if (grid.clientWidth - occupe >= r.base + ecart) {
        derniere.forEach(function (c) { c.style.flexGrow = '0'; });
      }
    }

    /* Décalages verticaux : chaque rangée est ramenée à zéro sur sa vignette
       la plus haute, sinon la grille entière descendrait et laisserait une
       bande vide sous les filtres. Une rangée d'une seule vignette — un
       téléphone, ou la dernière rangée — n'a rien à désaligner. */
    lignes.forEach(function (ligne) {
      if (ligne.length < 2) return;
      var parts = ligne.map(function (c) { return decalageDe(c, r.decalage); });
      var mini = Math.min.apply(null, parts);
      ligne.forEach(function (c, i) {
        var px = (parts[i] - mini) * c.offsetWidth;
        if (px > 0.5) c.style.marginTop = px.toFixed(1) + 'px';
      });
    });
  }

  function renderGrid(shown) {
    var host = document.getElementById('mk-grid');
    if (!host) return;
    host.textContent = '';

    shown.forEach(function (p) {
      var card = el('div');
      card.setAttribute('data-taille', p.taille);
      card.setAttribute('data-rang', p.number);
      if (p.decalage !== null) card.setAttribute('data-decalage', p.decalage);

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

    /* Après l'affichage seulement : une grille masquée ne donne pas ses
       colonnes. */
    composerGrille();
  }

  /* Le nombre de colonnes change avec la largeur de la fenêtre : les tailles
     se recalculent au redimensionnement, et au retour de l'orientation
     paysage sur téléphone. */
  var minuteurTailles = null;
  window.addEventListener('resize', function () {
    clearTimeout(minuteurTailles);
    minuteurTailles = setTimeout(composerGrille, 120);
  });

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

  function init() {
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
