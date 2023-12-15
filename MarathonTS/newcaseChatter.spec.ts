import { test, expect, chromium } from "@playwright/test"
import { log } from "console";

test("To launch browser", async ({page}) => {

// Enter the Username, Password and click on the Login button.
await page.goto("https://login.salesforce.com");
await page.fill('#username', 'aumesh@testleaf.com')
await page.fill('#password', 'testleaf1')
await page.click('#Login')

//Click on the App Launcher toggle button. 
await page.click(".slds-icon-waffle")

//Click on the View All link.
await page.getByLabel('View All Applications').click()
await page.waitForLoadState('load')  

//Type ‘Service’ in the search box and click on the Service link. 
await page.locator("div[data-name='Service']").click()
await page.waitForLoadState('load')    

// Navigate to the Cases tab from the Service dashboard. 
await page.locator("[title='Cases']").click()    
await page.waitForLoadState('load')    

//Click on the New button to create a new case. 
await page.locator("a[title='New']").click()
await page.waitForLoadState('load')

//A list menu with New Contact link should be displayed. 
await page.locator("input[placeholder='Search Contacts...']").focus()
await page.keyboard.press('Enter')

//  Click on the New Contact link 
await page.click("[title='New Contact']")
await page.waitForLoadState('load')

//  Fill in all the mandatory fields (Salutation, First Name, Last Name) with a valid data.
await page.locator(".select").first().click()
await page.locator("[title='Mr.']").click()
await page.fill("[placeholder='First Name']", "LeanFN")
await page.fill("[placeholder='Last Name']", "Appu")
await page.click("button[title='Save']")
await page.waitForLoadState('load')

//Click Search Accounts input field in Account Name and click on the New Account link 
await page.locator("input[placeholder='Search Accounts...']").first().click()
await page.keyboard.press('Enter')
await page.click("[title='New Account']")

// Fill in all the mandatory fields (Account Name, Account Number) with a valid data.
await page.locator("[class=' input']").first().fill("UmeshAcc")
await page.locator("[class=' input']").nth(3).fill("123456789")
await page.waitForLoadState('load')

//Select the Rating dropdown and choose the option ‘Hot’. Click on the Save button.
await page.locator("div .select").first().click()
await page.locator("[title='Hot']").click()
await page.locator("button[title='Save']").click()
await page.waitForLoadState('load')

//Select the Status dropdown icon and choose the value as New.
await page.locator("button[data-value='New']").click()
await page.locator("[data-value='New']").nth(1).click

//Select the Priority dropdown icon and choose the value as ‘High’. 
await page.locator("button[data-value='Medium']").click()
await page.locator("[data-value='Medium']").nth(1).click()

//Select the Case Origin dropdown icon and choose the value as ‘Email’.
await page.locator("[data-value='--None--']").first().click()
await page.locator("[data-value='Email']").click()

/* Fill in the Subject input field as ‘Product Return Request’ and Description input field as ‘Requesting a 
return for a defective product’ */
await page.locator("[name='Subject']").fill("Product Return Reques")
await page.locator(".slds-textarea").first().fill("Requesting a return for a defective product")

//  Click on the Save button.  
await page.locator("[name='SaveEdit']").click()

//Edit the Status under Details category and choose the ‘Escalated’ option from the dropdown.
// Click on the Save button.

await page.locator("[name='Edit']").click()
await page.waitForLoadState('load')

await page.locator("button[data-value='New']").click()
await page.locator("[data-value='Escalated']").click()
await page.locator("[name='SaveEdit']").click()

//Enter a valid data in the Share an Update input field and click on the Share button. 
await page.locator("[title='Share an update...']").last().click()
await page.waitForLoadState('load')
//await page.locator("[data-placeholder='Share an update...']").nth(1).focus()
await page.locator("[data-placeholder='Share an update...']").first().fill("Welcome to Testleaf")
await page.waitForLoadState('load')
await page.locator("button[title='Click, or press Ctrl+Enter']").click()

//Click on the dropdown icon and choose the Like on Chatter option. 
await page.locator(".cuf-media-right").first().click()
await page.waitForLoadState('load')
await page.locator("[title='Like on Chatter']").click()
await page.waitForLoadState('load')
const notificationMsg = await page.locator(".forceActionsText").innerText()
console.log(notificationMsg)
expect(notificationMsg).toContain(" was liked.")

//Navigate to the Chatter tab and verify the post liked by the user.
await page.locator("[title='Chatter']").click()
const postMsg = await page.locator("[class='feedBodyInner Desktop oneApp']").nth(1).innerText()
console.log(postMsg)
const likeIcon = await page.locator("span[title='Like']").nth(1).isVisible()
console.log(likeIcon)

})