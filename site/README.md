# Strona Pan od zlewów

Aplikacja Next.js dla [panodzlewow.pl](https://panodzlewow.pl). Opis całego repozytorium jest w [README w katalogu głównym](../README.md).

```bash
npm install
npm run dev
```

- [http://localhost:3000](http://localhost:3000) - polski
- [http://localhost:3000/en](http://localhost:3000/en) - angielski

Teksty są w `lib/dictionary.ts`.

Publikacja na Cloudflare Pages: `npx wrangler login`, potem `npm run deploy`. Szczegóły są w [README w katalogu głównym](../README.md).
