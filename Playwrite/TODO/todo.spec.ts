import { Expect, Browser, test, Locator} from "@playwright/test";
import { chromium, firefox, webkit } from "@playwright/test";

   test('First task', async ({ page }) =>{

await page.goto("https://microsoftedge.github.io/Demos/demo-to-do/");

await page.fill('input[id = new-task ]', 'work');
await page.click('input[type = submit]');

await page.fill('input[id= new-task]','paperwork');
await page.click('input[type = submit]');

})