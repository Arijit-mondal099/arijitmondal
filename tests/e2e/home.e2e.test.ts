/**
 * Smoke test for the landing page — verifies the hero section renders the
 * developer name, subtitle, CTAs, and that all major sections are mounted.
 */
import { BASE_URL } from "./utils";

describe("Home page", () => {
  beforeAll(async () => {
    // Use `domcontentloaded` (NOT networkidle0) — Next.js dev keeps an HMR
    // websocket open which means the network never actually goes idle.
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("h1");
  });

  it("renders the hero heading with the developer name", async () => {
    const heading = await page.$eval("h1", (el) => el.textContent ?? "");
    expect(heading).toMatch(/Arijit Mondal/);
  });

  it('shows the "Full Stack Web Developer" subtitle', async () => {
    // The subtitle is rendered via the `RevealText` helper, which wraps every
    // word in its own `inline-block` <motion.span>. The HTML between those
    // spans has no whitespace, so `innerText` collapses to e.g.
    // "FullStackWebDeveloper". Match leniently to allow any (or no) whitespace
    // between the words.
    await page.waitForFunction(
      () => /Full\s*Stack\s*Web\s*Developer/i.test(document.body.innerText),
      { timeout: 15_000 },
    );
  });

  it("renders both primary CTA buttons", async () => {
    const ctas = await page.$$eval("a", (els) =>
      els.map((el) => el.textContent?.trim()).filter(Boolean),
    );
    expect(ctas).toEqual(expect.arrayContaining(["View My Work", "Get In Touch"]));
  });

  it("mounts every major section in the DOM", async () => {
    for (const id of ["home", "about", "projects", "experience", "contact"]) {
      const el = await page.$(`#${id}`);
      expect(el).not.toBeNull();
    }
  });
});
