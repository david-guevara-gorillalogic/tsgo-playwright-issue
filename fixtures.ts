import { test as base, expect } from "@playwright/test";

export const test = base.extend<{
  helper: () => Promise<void>;
}>({
  helper: async ({ page }, use) => {
    await use(async () => {
      await page.goto("https://playwright.dev/");
      await expect(page).toHaveTitle(/Playwright/);
    });
  },
});

export { expect } from "@playwright/test";
