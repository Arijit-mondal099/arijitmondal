# E2E tests

End-to-end tests powered by **Jest + Puppeteer**. Each spec opens the portfolio
in a real headless Chromium and asserts on the rendered DOM.

## Stack

- [`jest`](https://jestjs.io/) — test runner
- [`puppeteer`](https://pptr.dev/) — headless Chromium driver
- [`jest-puppeteer`](https://github.com/argos-ci/jest-puppeteer) — wires Puppeteer
  globals (`page`, `browser`) into Jest **and** auto-starts `next dev` for the
  duration of the test run

## Run

```bash
# headless run against an auto-started dev server
npm run test:e2e

# run a single spec
npm run test:e2e -- tests/e2e/contact-form.e2e.test.ts

# debug a single test by opening Chromium with devtools open
npm run test:e2e:debug
```

If you already have `npm run dev` running on port 3000, the test runner will
reuse it (see `usedPortAction: 'ignore'` in `jest-puppeteer.config.cjs`).

## Files

| File                              | What it covers                                                      |
| --------------------------------- | ------------------------------------------------------------------- |
| `home.e2e.test.ts`                | Hero heading, subtitle, CTAs, every `<section id>` is mounted       |
| `navigation.e2e.test.ts`          | Header nav buttons exist + clicking "Projects" scrolls into view    |
| `contact-form.e2e.test.ts`        | zod validation errors + happy-path submit (API intercepted)         |
| `theme-toggle.e2e.test.ts`        | next-themes dropdown adds `dark` class to `<html>`                  |

## Adding a new spec

1. Create `tests/e2e/<feature>.e2e.test.ts`.
2. Use the global `page` (typed via [`types.d.ts`](./types.d.ts)).
3. Always navigate with `waitUntil: 'domcontentloaded'` — `networkidle0` will
   hang because Next dev keeps an HMR websocket open.

## Notes

- The contact form spec mocks `/api/v1/contact` so tests never send real email.
- First run is slower (~30–60s) because Next compiles routes on first request;
  per-test timeout is 60s to compensate.
- Puppeteer downloads its own bundled Chromium on `npm install`; no extra setup.
