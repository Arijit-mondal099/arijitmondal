/**
 * jest-puppeteer configuration.
 *
 * - `launch` options control the headless Chromium instance.
 * - `server` boots `next dev` before tests run and shuts it down afterwards.
 *   If port 3000 is already taken (e.g. you have `npm run dev` open in another
 *   terminal), `usedPortAction: 'ignore'` reuses that server instead of failing.
 */
module.exports = {
  launch: {
    headless: process.env.PUPPETEER_HEADLESS !== "false",
    devtools: process.env.PUPPETEER_HEADLESS === "false",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 1280, height: 800 },
  },
  server: {
    command: "npm run dev",
    port: 3000,
    launchTimeout: 180_000,
    debug: false,
    usedPortAction: "ignore",
  },
};
