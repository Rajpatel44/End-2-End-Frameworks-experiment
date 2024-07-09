import { Browser, test ,  expect } from "@playwright/test";
import { webkit, chromium, firefox } from "@playwright/test";

test ("My Third Task", async({page})=>{
 
    
    await page.goto("https://microsoftedge.github.io/Demos/demo-to-do/");

    await page.fill('input[id = new-task]', '#7381$')
    await page.click('input[type = submit]')

    await page.fill('input[id = new-task]', '35$8&@')
    await page.click('input[type = submit]')

    await page.click('input[type = checkbox]');
    await page.click('input[type = checkbox]');

})