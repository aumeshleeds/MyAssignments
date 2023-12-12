/**
 * Test Steps:
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Accounts tab 
5. Click on New button
6. Enter 'your name' as account name
7. Select Ownership as Public                                               
8. Click save and verify Account name 
 */

import { test, chromium, expect } from "@playwright/test"

test("To launch browser", async ({page}) => {
        //Login to https://login.salesforce.com
        await page.goto("https://login.salesforce.com");
        await page.fill('#username', 'aumesh@testleaf.com')
        await page.fill('#password', 'testleaf1')
        await page.click('#Login')
        //Click on toggle menu button from the left corner
        await page.click(".slds-icon-waffle")
        await page.waitForLoadState('load')  
        //Click view All
        await page.getByRole('button', {name: 'View All'}).click()
        await page.waitForLoadState('load')  
        //click Sales from App Launche
        await page.locator("div[data-name='Sales']").click()
        await page.waitForLoadState('load')  
        //Click on Accounts tab
        await page.locator("[title='Accounts']").click()
        await page.waitForLoadState('load')
        //Click on New button      
        await page.locator("a[title='New']").click()
        await page.waitForLoadState('load')
        //Enter 'your name' as account name
        await page.locator("input[name='Name']").fill("Umesh")
        await page.locator('button[aria-label="Ownership, --None--"]').click()
        await page.waitForLoadState('load')
        //Select Ownership as Public
        await page.locator('Span[title="Public"]').click()
        await page.waitForLoadState('load')
        //Click save and verify Account name      
        await page.locator('button[name="SaveEdit"]').click()
        const accName = await page.locator(".custom-truncate").innerText()
        console.log(expect(accName).toBe('Umesh'))
})