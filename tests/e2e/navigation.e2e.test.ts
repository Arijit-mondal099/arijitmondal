/**
 * Verifies the desktop header navigation: every link is rendered and clicking
 * one scrolls the corresponding section into view.
 */
import { BASE_URL } from "./utils";

const NAV_ITEMS = ["Home", "About", "Projects", "Experience", "Contact"] as const;

describe("Header navigation", () => {
  beforeEach(async () => {
    await page.setViewport({ width: 1280, height: 800 }); // ensure desktop nav visible
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("header button");
    // The Header renders the theme-toggle button only after `setMounted(true)`,
    // so its presence is a reliable signal that the client component has
    // hydrated and `onClick` handlers are wired up.
    await page.waitForSelector('button[aria-label="Toggle theme"]');
  });

  it.each(NAV_ITEMS)("shows the %s nav button", async (name) => {
    const labels = await page.$$eval("header button", (els) =>
      els.map((el) => el.textContent?.trim()),
    );
    expect(labels).toEqual(expect.arrayContaining([name]));
  });

  it('scrolls to the Projects section when "Projects" is clicked', async () => {
    // Make sure we start at the top of the page.
    await page.evaluate(() => window.scrollTo(0, 0));

    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("header button"));
      const target = buttons.find((b) => b.textContent?.trim() === "Projects");
      if (!target) throw new Error("Projects button not found in <header>");
      target.click();
    });

    // The page is ~5 viewports tall, so smooth-scrolling all the way down can
    // take several seconds. Assert in two steps so we get a clear failure
    // signal: (1) the click fired and scrolling started, (2) #projects landed.
    await page.waitForFunction(() => window.scrollY > 100, { timeout: 5_000 });
    await page.waitForFunction(
      () => {
        const section = document.getElementById("projects");
        if (!section) return false;
        return Math.abs(section.getBoundingClientRect().top) < 250;
      },
      { timeout: 15_000 },
    );
  });
});
