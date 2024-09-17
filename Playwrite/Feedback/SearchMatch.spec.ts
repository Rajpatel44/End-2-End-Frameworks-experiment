import {  Browser, test} from "@playwright/test";
import { chromium, webkit, firefox } from "@playwright/test";

test("Feedback test", async ({ page }) => {
    const url = "https://feedback.swlstg.nhs.uk/";
    await page.goto(url);
  
    await page.fill('input[type="text"]', "test LD");
    await page.waitForSelector('[data-test-id="1098"]');
    await page.click('[data-test-id="1098"]');

  
    await page.waitForTimeout(4000);
  });