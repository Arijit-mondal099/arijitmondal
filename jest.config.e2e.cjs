/**
 * Jest config for end-to-end tests. Runs Puppeteer (headless Chromium) against
 * a real Next.js dev server (auto-started by `jest-puppeteer.config.cjs`).
 *
 * Run with:  npm run test:e2e
 *
 * Kept as `.cjs` (not `.ts`) so Jest can load it without `ts-node`.
 */
/** @type {import('jest').Config} */
module.exports = {
  preset: "jest-puppeteer",
  rootDir: ".",
  testMatch: ["<rootDir>/tests/e2e/**/*.e2e.test.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      { tsconfig: "<rootDir>/tests/e2e/tsconfig.json" },
    ],
  },
  // Next.js dev server is slow on first request (compiles routes on demand),
  // so give each test plenty of headroom.
  testTimeout: 60_000,
  verbose: true,
};
