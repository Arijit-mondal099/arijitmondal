/**
 * Exercises the Contact section's react-hook-form + zod validation, and a
 * happy-path submit. The POST to /api/v1/contact is intercepted so the test
 * never actually sends an email.
 */
import type { HTTPRequest } from "puppeteer";
import { BASE_URL } from "./utils";

describe("Contact form", () => {
  beforeEach(async () => {
    await page.goto(`${BASE_URL}/#contact`, { waitUntil: "domcontentloaded" });
    await page.waitForSelector('button[type="submit"]');
  });

  it("shows zod validation errors on empty submit", async () => {
    await page.click('button[type="submit"]');
    await page.waitForFunction(
      () =>
        Array.from(document.querySelectorAll("p")).some((p) =>
          /at least \d+ characters/i.test(p.textContent ?? ""),
        ),
      { timeout: 5_000 },
    );
  });

  it("submits successfully with valid input (API mocked)", async () => {
    await page.setRequestInterception(true);
    const handler = (req: HTTPRequest) => {
      if (req.url().includes("/api/v1/contact")) {
        void req.respond({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ success: true }),
        });
        return;
      }
      void req.continue();
    };
    page.on("request", handler);

    try {
      await page.type("#name", "Jane Tester");
      await page.type("#email", "jane@example.com");
      await page.type("#subject", "Hello there");
      await page.type("#message", "This is a long enough test message.");
      await page.click('button[type="submit"]');

      await page.waitForFunction(
        () => document.body.innerText.includes("Message sent successfully"),
        { timeout: 10_000 },
      );
    } finally {
      page.off("request", handler);
      await page.setRequestInterception(false);
    }
  });
});
