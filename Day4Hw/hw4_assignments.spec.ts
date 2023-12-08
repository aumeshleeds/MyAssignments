/* Assignment: 4 Edit Individuals

Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name */

import { test, expect, chromium } from "@playwright/test"
import { randomUUID } from "crypto";

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
    await page.locator("input[name='Individual-search-input']").fill('FirstName')
    await page.keyboard.press("Enter")
    await page.waitForLoadState('load')
    await page.locator("span[class$='spread'] div[class*= forceVirtualAction] a[role=button]").nth(0).click();
    await page.waitForLoadState('load');
    await page.click("[data-target-selection-name*='Individual.Edit']");
    await page.click("div[class^= salutation] div[class=uiPopupTrigger] a[role=button]");
    await page.click("a[title='Mr.']");
    await page.fill("input[placeholder='First Name']", "FirstName");
    await page.click("button[title='Save']");
    let fullName = await page.locator("span[class*=fullName]").innerText();
    console.log(fullName);

})