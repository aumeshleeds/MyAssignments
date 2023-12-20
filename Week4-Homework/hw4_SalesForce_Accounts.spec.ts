/*
SalesForce -Accounts (upload files)
-----------------------------------
1.Login to Salesforce
2.Click on toggle menu
3.Search for Accounts
4.Click the Accounts
5.Click on the first resulting account name
6.Upload files under Notes and Attachments 
  Hint : use page.focus(selector) to scroll to view the element - uploadfiles 
7.Verify the toast message
*/

import { test, chromium, expect } from "@playwright/test"
import path from "path"

test("Verify File Upload", async ({page}) => {
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
        //click Accounts from App Launche
        await page.locator("a[data-label='Accounts']").click()
        await page.waitForLoadState('load')  
        //Click on Accounts tab
        await page.locator("[title='Accounts']").click()
        await page.waitForLoadState('load')
        //Click on the first resulting account name
        await page.locator("[data-refid='recordId']").first().click()
        await page.waitForLoadState('load')
        //Upload files under Notes and Attachments 
        //Hint : use page.focus(selector) to scroll to view the element - uploadfiles
        console.log((path.join(__dirname,'uploadfile.jpeg')))
        page.once('dialog', async dialog =>{
          await dialog.accept(); 
        })
        await page.locator("[name='fileInput']").first().setInputFiles([path.join(__dirname,'uploadfileLatest.jpeg')])
        await page.waitForLoadState('load')
        await expect(page.locator("[title='uploadfile']").first()).toContainText("uploadfile")

})


