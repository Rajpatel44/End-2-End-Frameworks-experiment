import {  Browser, test,Locator,} from "@playwright/test"
import { chromium, webkit, firefox } from "@playwright/test"

test("Timeout panel", async ({ page }) => {

    const url = "https://feedback.swlstg.nhs.uk/"
    const dialogSelector = 'dialog .modal-title'
    await page.goto(url)

    await page.fill('input[type="text"]', 'test')
    await page.waitForSelector('[data-test-id="1036"]')
    await page.click('[data-test-id="1036"]')
    await page.click('[data-test-id="CarerServiceUser"]')

    await page.waitForSelector(dialogSelector, { timeout: 60000 })

    const closeButton: Locator = page.locator('dialog .modal-footer button:has-text("Close")')
    
    await closeButton.click();


})