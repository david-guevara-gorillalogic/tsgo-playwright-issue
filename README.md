# Cannot "go to definition" of a playwright fixture

## Steps to reproduce

1. Clone the repository at <https://github.com/david-guevara-gorillalogic/tsgo-playwright-issue.git>

    This an standard playwright repository with a custom fixture:

    ```typescript
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
    ```

2. Open a test file that uses that custom fixture:

    ```typescript
    test("has title", async ({ helper }) => {
      await heklper();
    });
    ```

3. Move your cursor over the `helper` fixture and try to "go to definition".

4. Your editor won't go to the definition inside the fixtures file, at most it will move to the parameter `{ helper }`.


## Behavior with `typescript@6.0`

The editor will go to the definition inside the fixture file.

## Behavior with `tsgo`

The editor won't go to the definition inside the fixtures file, at most it will move to the parameter `{ helper }`.

## Notes

I tested this with neovim and VSCode and was able to reproduce the issue in both.
