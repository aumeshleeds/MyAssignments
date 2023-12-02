/* Assignment - 2 (Create a new Lead)

1) Open http://leaftaps.com/opentaps/control/main
2) Perform the following functions

    a) Login (Enter username, password, Click Login)
    b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
       await page.locator("text=CRM/SFA').click();
    c) Click the Leads Link (See the Tab)
    d) Click Create Lead Link (See Left Menu)
    e) Enter the company name, fir
    */

import { test, chromium } from "@playwright/test"

test("To launch browser", async () => {

    const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browsercontext = await browser.newContext();
    const page = await browsercontext.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill('#username', 'Demosalesmanager')
    await page.locator(".inputLogin").nth(1).fill('crmsfa') // 1 is the second element , first element index is zero
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click();
    await page.locator('text=Leads').nth(0).click();
    await page.locator("text=Create Lead").nth(0).click();
    await page.fill("#createLeadForm_companyName", "CompTest Name")
    await page.fill("#createLeadForm_firstName", "ForeNameTest")
    await page.locator("[name=lastName]").nth(2).fill("LastNameTest")
    await page.locator("[name=submitButton]").click()
    const compName = await page.locator('#viewLead_companyName_sp').innerText()
    console.log(`The Created Lead Name is : ${compName}`)


    await page.waitForTimeout(5000)

})