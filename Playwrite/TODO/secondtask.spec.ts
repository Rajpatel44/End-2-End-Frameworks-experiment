import {  Browser, test} from "@playwright/test";
import { chromium, webkit, firefox } from "@playwright/test";

test("My Second Task",async({page})=>{

    
    await page.goto("https://microsoftedge.github.io/Demos/demo-to-do/");

    await page.fill('input[id = new-task]', 'software');
    await page.click('input[ type = submit]');

    await page.fill('input[id = new-task]', 'playwright');
    await page.click('input[ type = submit]');

    await page.click('input[type = checkbox]');
    await page.click('input[type = checkbox]');

    await page.waitForTimeout(4000);


})