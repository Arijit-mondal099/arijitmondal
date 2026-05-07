/**
 * jest-puppeteer injects `page`, `browser`, and `jestPuppeteer` as globals
 * inside every test. Declare them here so TypeScript stops complaining.
 */
import type { Browser, Page } from "puppeteer";

declare global {
  const page: Page;
  const browser: Browser;
  const jestPuppeteer: {
    debug(): Promise<void>;
    resetPage(): Promise<void>;
    resetBrowser(): Promise<void>;
  };
}

export {};
