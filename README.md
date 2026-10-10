# Pan od zlewów

Strona usługi udrażniania zlewów, umywalek i odpływów pralek w Krakowie, Wieliczce, Skawinie i okolicach. Publikacja: [panodzlewow.pl](https://panodzlewow.pl).

## Zawartość

- `site/` - strona (Next.js)
- `brandbook/` - księga znaku, statyczny HTML
- `logo.svg` - znak

## Uruchomienie strony

Wymagany Node.js w wersji zgodnej z Next.js 16.

```bash
cd site
npm install
npm run dev
```

- [http://localhost:3000](http://localhost:3000) - polski
- [http://localhost:3000/en](http://localhost:3000/en) - angielski

Pozostałe skrypty, uruchamiane z katalogu `site/`:

```bash
npm run build
npm run preview
npm run lint
```

`npm run build` zapisuje gotową stronę do `site/out/`. `npm run preview` otwiera tę wersję lokalnie.

## Publikacja na Cloudflare Pages

Darmowy plan Cloudflare Pages serwuje pliki statyczne bez limitu odsłon. Strona nie potrzebuje serwera Node.js.

Jednorazowo zaloguj konto Cloudflare:

```bash
cd site
npx wrangler login
```

Potem każda publikacja:

```bash
npm run deploy
```

Po pierwszym wdrożeniu strona jest pod adresem `https://pan-od-zlewow.pages.dev`.

Własną domenę `panodzlewow.pl` podłączasz w panelu Cloudflare: Workers & Pages, projekt `pan-od-zlewow`, Custom domains. Domena musi być na tym samym koncie Cloudflare.

## Treści i języki

Polski jest językiem domyślnym i nie ma prefiksu w adresie. Angielski jest pod `/en`.

Teksty obu wersji są w `site/lib/dictionary.ts`. Adres kanoniczny i metadane SEO biorą bazę z `siteUrl` w tym samym pliku.

## Księga znaku

Otwórz `brandbook/index.html` w przeglądarce. Nie wymaga budowania ani serwera.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. Fonty: Schibsted Grotesk i IBM Plex Mono, lokalnie w `site/app/fonts/`.
