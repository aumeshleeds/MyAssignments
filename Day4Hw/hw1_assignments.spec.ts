/*Test Steps: Assignment: 
1 Create Lead 1. Login to https://login.salesforce.com 
2. Click on toggle menu button from the left corner 
3. Click view All and click Sales from App Launcher 
4. Click on Leads tab 5. Click on New button 
6. Select Salutation dropdown 
7. Enter the Last Name 
8. Enter the CompanyName 
9. Click Save and Verify Leads name created 
*/

import { test, expect, chromium } from "@playwright/test"

test("To launch browser", async ({page}) => {

    await page.goto("https://login.salesforce.com");
        await page.fill('#username', 'aumesh@testleaf.com')
        await page.fill('#password', 'testleaf1')
        await page.click('#Login')
        await page.click(".slds-icon-waffle")
        await page.getByLabel('View All Applications').click()
        await page.waitForLoadState('load')        
        await page.locator("p[class='slds-truncate']").nth(7).click()
        await page.waitForLoadState('load')        
        await page.locator("svg[class = 'slds-icon slds-icon-text-default slds-icon_xx-small']").nth(1).click()
        await page.getByRole('menuitem').nth(0).click()
        const selector = await page.$("button[name='salutation']")
        await selector?.selectOption("1")
        await page.fill("input[name='lastName']", "FirstNameTest")
        await page.fill("input[name='Company']", "CompanyNameTest")
        await page.click("button[name='SaveEdit']")
        const leadName = await page.locator("slot[name='primaryField']").innerText()
        console.log(`The Lead Name created is : ${leadName}`)
})

