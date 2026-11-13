# Atelier — Studio di architettura

Una semplice pagina web per presentare **Atelier**, uno studio di architettura. Il sito raccoglie una panoramica dei servizi, alcuni progetti, i contatti e un piccolo dettaglio interattivo: puoi passare dal tema chiaro a quello scuro.

## Cosa trovi nella pagina

- **Studio**: una breve presentazione dello studio.
- **Servizi**: progettazione residenziale, interior design e ristrutturazioni.
- **Lavori**: una galleria di progetti con filtri per categoria.
- **Contatti**: un modulo dimostrativo per le richieste.
- **Tema**: il pulsante in alto alterna tema chiaro e scuro.

## Struttura dei file

```text
Progetto-W-6/
├── index.html          # Struttura e contenuti della pagina
├── README.md           # Questa guida
└── assets/
    ├── css/
    │   └── style.css   # Aspetto, colori e adattamento ai vari schermi
    └── js/
        └── script.js   # Tema, progetti e filtri
```

## Tecnologie utilizzate

- **HTML** per organizzare i contenuti;
- **CSS** per colori, impaginazione e responsive design;
- **JavaScript** per il cambio tema, la visualizzazione dei progetti e i filtri;
- **Bootstrap 5** e **Font Awesome**, caricati da CDN, per alcuni componenti e icone.

## Una nota sul modulo contatti

Il modulo è solo una parte visiva della pagina: al momento non invia davvero i messaggi.

## Personalizzare i progetti

I progetti mostrati nella sezione **Lavori** sono definiti all'inizio di `assets/js/script.js`, nell'elenco `LAVORI`. Da lì puoi cambiare titolo, anno, categoria e immagine. I pulsanti della pagina filtrano automaticamente i progetti in base alla categoria.

