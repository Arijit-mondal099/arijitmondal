/**
 * Exercises the next-themes dropdown in the header — selecting "Dark" should
 * add the `dark` class to <html>.
 */
import { BASE_URL } from "./utils";

describe("Theme toggle", () => {
  beforeEach(async () => {
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    await page.waitForSelector('button[aria-label="Toggle theme"]');
  });

  it("switches to dark mode when 'Dark' is selected", async () => {
    await page.click('button[aria-label="Toggle theme"]');

    // Radix renders the dropdown into a portal — wait for the menuitem to mount.
    await page.waitForFunction(
      () =>
        Array.from(document.querySelectorAll('[role="menuitem"]')).some(
          (el) => el.textContent?.trim() === "Dark",
        ),
      { timeout: 5_000 },
    );

    await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll<HTMLElement>('[role="menuitem"]'));
      items.find((el) => el.textContent?.trim() === "Dark")?.click();
    });

    await page.waitForFunction(
      () => document.documentElement.classList.contains("dark"),
      { timeout: 5_000 },
    );
  });
});
