/*Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
   7. Click save and verify Individuals Name */

import { test, expect, chromium } from "@playwright/test"
import { randomUUID } from "crypto";
let indvidual="";
test("To launch browser", async ({page}) => {
        await page.goto("https://login.salesforce.com");
        await page.fill('#username', 'aumesh@testleaf.com')
        await page.fill('#password', 'testleaf1')
        await page.click('#Login')
        await page.click(".slds-icon-waffle")
        await page.getByLabel('View All Applications').click()
        await page.waitForLoadState('load')        
        await page.locator("text='Individuals'").click() 
        await page.waitForLoadState('load')
        await page.click(".forceActionLink") 
        await page.waitForLoadState('load')        
        await page.getByPlaceholder("Last Name").fill('FirstName')
        await page.click("button[title='Save']")
        const indvidual = await page.locator("div[class*=slds-page-header__title] span[class=uiOutputText]").innerText();
        console.log(indvidual)
        // await page.waitForLoadState('load') 
        // await page.getByRole('tab', { name: 'Details' }).click()
        // const indName = await page.locator("div[class='slds-form-element__control slds-grid itemBody']").nth(0).innerText()
        // console.log(indName) 
        // await page.waitForLoadState('load')   
        // await page.getByLabel('Search', { exact: true }).fill(indName)
        // // await page.locator("input[class='slds-input']").nth(1).fill(indName)     
        // //await page.fill("(//input[@class='slds-input'])[2]']",indName )
        // await page.keyboard.press("Enter")
})
