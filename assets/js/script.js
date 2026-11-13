const THEME_TOGGLE = document.getElementById('theme-toggle');
const THEME_ICON = document.getElementById('theme-icon');
const HTML = document.documentElement;

THEME_TOGGLE.addEventListener('click', function () {
    const ACTUAL_THEME = HTML.getAttribute('data-bs-theme');

    if (ACTUAL_THEME === 'light') {
        HTML.setAttribute('data-bs-theme', 'dark');
        THEME_ICON.className = 'fa-solid fa-sun';
    } else {
        HTML.setAttribute('data-bs-theme', 'light');
        THEME_ICON.className = 'fa-solid fa-moon';
    }
});

const LAVORI = [
    { titolo: 'Villa sul lago', anno: 2024, categoria: 'Residenziale', immagine: 'https://placehold.co/600x400/7a5540/ffffff?text=Villa+sul+lago' },
    { titolo: 'Appartamento Navigli', anno: 2023, categoria: 'Interior design', immagine: 'https://placehold.co/600x400/7a5540/ffffff?text=Appartamento+Navigli' },
    { titolo: 'Casa colonica', anno: 2022, categoria: 'Ristrutturazioni', immagine: 'https://placehold.co/600x400/7a5540/ffffff?text=Casa+colonica' },
    { titolo: 'Loft industriale', anno: 2024, categoria: 'Interior design', immagine: 'https://placehold.co/600x400/7a5540/ffffff?text=Loft+industriale' },
    { titolo: 'Casa a schiera', anno: 2023, categoria: 'Residenziale', immagine: 'https://placehold.co/600x400/7a5540/ffffff?text=Casa+a+schiera' },
    { titolo: 'Ex fabbrica', anno: 2022, categoria: 'Ristrutturazioni', immagine: 'https://placehold.co/600x400/7a5540/ffffff?text=Ex+fabbrica' }
];

const FILTRI = document.getElementById('filtri');
const GRIGLIA_LAVORI = document.getElementById('griglia-lavori');

const MODALE_TITOLO = document.getElementById('modale-titolo');
const MODALE_IMMAGINE = document.getElementById('modale-immagine');
const MODALE_ANNO = document.getElementById('modale-anno');
const MODALE_CATEGORIA = document.getElementById('modale-categoria');

function riempiModale(lavoro) {
    MODALE_TITOLO.textContent = lavoro.titolo;
    MODALE_IMMAGINE.src = lavoro.immagine;
    MODALE_IMMAGINE.alt = lavoro.titolo;
    MODALE_ANNO.textContent = lavoro.anno;
    MODALE_CATEGORIA.textContent = lavoro.categoria;
}

function mostraLavori(lista) {
    GRIGLIA_LAVORI.textContent = '';

    lista.forEach(function (lavoro) {
        const COLONNA = document.createElement('div');
        COLONNA.className = 'col-12 col-md-6 col-lg-4';

        const CARD = document.createElement('div');
        CARD.className = 'card card-elevata card-lavoro h-100';
        CARD.setAttribute('data-bs-toggle', 'modal');
        CARD.setAttribute('data-bs-target', '#modale-lavoro');

        CARD.addEventListener('click', function () {
            riempiModale(lavoro);
        });

        const IMMAGINE = document.createElement('img');
        IMMAGINE.src = lavoro.immagine;
        IMMAGINE.className = 'card-img-top';
        IMMAGINE.alt = lavoro.titolo;

        const CORPO = document.createElement('div');
        CORPO.className = 'card-body';

        const TITOLO = document.createElement('h3');
        TITOLO.className = 'h5 fw-bold';
        TITOLO.textContent = lavoro.titolo;

        const ANNO = document.createElement('p');
        ANNO.className = 'mb-2';
        ANNO.textContent = lavoro.anno;

        const ETICHETTA = document.createElement('span');
        ETICHETTA.className = 'badge badge-categoria';
        ETICHETTA.textContent = lavoro.categoria;

        CORPO.appendChild(TITOLO);
        CORPO.appendChild(ANNO);
        CORPO.appendChild(ETICHETTA);
        CARD.appendChild(IMMAGINE);
        CARD.appendChild(CORPO);
        COLONNA.appendChild(CARD);
        GRIGLIA_LAVORI.appendChild(COLONNA);
    });
}

FILTRI.addEventListener('click', function (event) {
    if (!event.target.classList.contains('btn-filtro')) {
        return;
    }

    const CATEGORIA = event.target.getAttribute('data-categoria');
    const BOTTONI = FILTRI.querySelectorAll('.btn-filtro');

    BOTTONI.forEach(function (bottone) {
        bottone.classList.remove('active');
    });
    event.target.classList.add('active');

    if (CATEGORIA === 'Tutti') {
        mostraLavori(LAVORI);
    } else {
        const FILTRATI = LAVORI.filter(function (lavoro) {
            return lavoro.categoria === CATEGORIA;
        });
        mostraLavori(FILTRATI);
    }
});

mostraLavori(LAVORI);