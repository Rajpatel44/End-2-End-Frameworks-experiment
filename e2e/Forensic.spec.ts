import {  Browser, test} from "@playwright/test";
import { chromium, webkit, firefox } from "@playwright/test";


test("Feedback test", async ({ page }) => {
    const url = "https://feedback.swlstg.nhs.uk/";
    await page.goto(url);

    await page.fill('input[type="text"]', 'test forensic')
    await page.waitForSelector('[data-test-id="1040"]')
    await page.click('[data-test-id="1040"]')

    await page.click('[ref="wrapper"]')
    await page.click('[class="radio  form-check radio-selected"]')

    await page.click('[value="stronglyAgree"]') // With My Care
    await page.click('[id="overallIAmSatisfiedWith-withMyCareAndCrisisPlanning-neitherAgreeNorDisagree"]') // With my care and crisis planning
    await page.click('[value="stronglyAgree"]') // With my treatment
    await page.click('[name="data[overallIAmSatisfiedWith][withMyDischargePlanning]"]')	// With my discharge planning
    await page.click('[name="data[overallIAmSatisfiedWith][withHowMyMedicationHasBeenManaged]"]') // With how my medication has been managed
    await page.click('[name="data[overallIAmSatisfiedWith][withHowMyRightsHasBeenManaged]"]') // With how my rights has been managed
    await page.click('[name="data[overallIAmSatisfiedWith][withTheEnvironmentFacilities]"]') // With the environment & facilities
    await page.click('[name="data[overallIAmSatisfiedWith][thatIHaveBeenTreatedWithDignityAndRespect]"]') // That I have been treated with dignity and respect
    
    await page.click('[class="form-check-label label-position-right"]')

    await page.click('[type="submit"]')

    await page.click('[data-test-id="6329b23c4517a6236f2065a6"]')
    await page.click('[class="btn btn-primary btn-md"]')

    
    await page.getByTestId('[data-test-id="wouldYouLikeToAnswerMoreQuestionsAboutYourCare14"][value="yes"]')


    
    
    await page.waitForTimeout(5000);

})

