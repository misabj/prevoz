# [NAZIV FIRME]

Moderan, responzivan i višejezični website za firmu koja pruža međunarodne pogrebne usluge i prevoz pokojnika. Dizajn je svetao, dostojanstven i premium, sa fokusom na poverenje, dostupnost 24/7 i jednostavno kontaktiranje.

## Tehnologije

- [Next.js 16](https://nextjs.org/) sa App Router pristupom
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/) za višejezičnost
- [lucide-react](https://lucide.dev/) za ikonice
- [Framer Motion](https://www.framer.com/motion/) za suptilne animacije

## Jezici i URL struktura

- Srpski: `/sr`
- English: `/en`
- Deutsch: `/de`

## Glavne stranice

- Početna / Home / Startseite
- O nama / About us / Über uns
- Usluge / Services / Dienstleistungen
- Međunarodni prevoz pokojnika
- Dokumentacija i administracija
- Vozni park / Fleet / Fuhrpark
- Video galerija
- Blog / Korisne informacije
- Kontakt / Contact / Kontakt
- FAQ
- Politika privatnosti
- Uslovi korišćenja

## Pokretanje razvojnog servera

```bash
npm install
npm run dev
```

Sajt je dostupan na `http://localhost:3000/sr`.

## Build

```bash
npm run build
```

## Struktura projekta

```
prevoz/
├── app/
│   ├── [locale]/          # Lokalizovane stranice
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Redirect na default locale
│   ├── robots.ts          # robots.txt
│   └── sitemap.ts         # XML sitemap
├── components/
│   ├── home/              # Sekcije početne stranice
│   ├── layout/            # Header, Footer, MobileMenu...
│   ├── shared/            # Reusable komponente
│   ├── blog/              # Blog client komponente
│   └── video/             # Video client komponente
├── config/
│   └── site.ts            # Podaci firme (lako izmenjivi)
├── data/
│   ├── services.ts        # Podaci o uslugama
│   ├── vehicles.ts        # Podaci o vozilima
│   ├── videos.ts          # YouTube video podaci
│   ├── blog.ts            # Blog članci
│   └── faq.ts             # FAQ pitanja
├── messages/
│   ├── sr.json            # Srpski prevodi
│   ├── en.json            # English prevodi
│   └── de.json            # Deutsch prevodi
├── i18n/
│   ├── routing.ts         # Locale konfiguracija
│   ├── navigation.ts      # Lokalizovani Link
│   └── request.ts         # Učitavanje prevoda
└── lib/
    └── utils.ts           # Pomoćne funkcije
```

## Izmena podataka firme

Svi osnovni podaci firme (naziv, telefoni, email, adresa, društvene mreže) nalaze se u:

```
src/config/site.ts
```

## Slike

Slike se učitavaju preko `next/image`. Za demo sadržaj korišćene su fotografije sa Unsplash-a. Pre produkcije preporučuje se zamena licenciranim fotografijama firme.

## Napomena

Kontakt forma trenutno koristi mock submit handler. Za povezivanje sa stvarnim servisom (EmailJS, Resend API, PHP endpoint) potrebno je izmeniti `handleSubmit` funkciju u `src/components/shared/ContactForm.tsx`.
