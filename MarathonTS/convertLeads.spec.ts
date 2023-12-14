import { test, expect, chromium } from "@playwright/test"
import { log } from "console";

test("To launch browser", async ({page}) => {
    let oppName = "UmeshOpp"

    //Enter the Username, Password and click on the Login button. 
    await page.goto("https://login.salesforce.com");
    await page.fill('#username', 'aumesh@testleaf.com')
    await page.fill('#password', 'testleaf1')
    await page.click('#Login')

    //Click on the App Launcher toggle button. 
    await page.click(".slds-icon-waffle")

    //Click on the View All link.
    await page.getByLabel('View All Applications').click()
    await page.waitForLoadState('load')        
    //Type ‘Marketing’ in the search box and click on the Marketing link. 
    await page.locator("div[data-name='Marketing']").click()
    await page.waitForLoadState('load')    

    // Click on the New button to create a lead.     
    await page.locator("[title='Leads']").click()    
    await page.waitForLoadState('load')    
    await page.locator("a[title='New']").click()
    await page.waitForLoadState('load')    

    await page.locator("button[aria-label = 'Salutation, --None--']").click()
    await page.locator("[data-value='Mr.']").click()
    await page.fill("[name='firstName']", "LeanFN")
    await page.fill("[name='lastName']", "Appu")
    await page.fill("[name='Company']", "Testlead")
    await page.locator("[name='SaveEdit']").click()
    await page.waitForLoadState('load')    

    // In the newly created Lead page, locate the dropdown near Submit for Approval button and 
    // click on the Convert link.
    const LeadName = await page.locator("[slot='primaryField']").innerText()
    console.log(LeadName)
    await page.locator("button[class = 'slds-button slds-button_icon-border-filled']").click()
    await page.getByRole('menuitem').nth(6).click()
    await page.waitForLoadState('load')    

    //Navigate to the Opportunities tab and search for the opportunity linked with the converted 
    // lead.
    await page.locator("button[class='slds-button transparentButton']").nth(2).click()
    await page.locator("input[class=' input']").nth(3).clear()
    await page.locator("input[class=' input']").nth(3).fill(oppName)
    await page.locator("[class='slds-button slds-button_brand']").click()
    await page.waitForLoadState('load')    


    await page.locator("[class='slds-button slds-button_brand']").click()
    await page.waitForLoadState('load') 

    await page.locator("input.slds-input").fill(LeadName)
    await page.keyboard.press('Enter')
    await page.waitForLoadState('load') 

    //Navigate to the Opportunities tab and search for the opportunity linked with the converted 
    // lead. 
    const confMsg = await page.locator("[class='slds-rich-text-editor__output'] span").nth(0).innerText()
    expect(confMsg).toBe("No items to display.")

    //Search the opportunity name created and click on the created opportunity name.
    await page.locator("[title='Opportunities']").click()
    await page.waitForLoadState('load') 
    await page.locator("input.slds-input").fill(oppName)
    await page.keyboard.press('Enter')
    await page.waitForLoadState('load') 

    await page.locator(`[title="UmeshOpp"]`).nth(0).click()
        
})