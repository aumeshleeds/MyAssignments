import { chromium } from "@playwright/test";
import loginData from "../../testdata/loginData.json"
import { updateLead } from "./update_lead.spec";

let LName:string;

async function deleteLead()  {

    const browser = await  chromium.launch({headless:false, channel: 'chrome'})
    const browserContext = await browser.newContext()
    //const apiRequestContext = browserContext.request
    // get the new browser context
    const browsercontext = await browser.newContext();
    //get a new page
    const page = await browsercontext.newPage();

    // Enter the Username, Password and click on the Login button.
    await page.goto("https://testleaf-7d-dev-ed.develop.my.salesforce.com");
    await page.fill('#username', loginData.Loginsfmyinstance.username)
    await page.fill('#password', loginData.Loginsfmyinstance.password)
    await page.click('#Login')
        
    //Click on the App Launcher toggle button. 
    await page.click(".slds-icon-waffle")

    //Click on the View All link.
    await page.getByLabel('View All Applications').click()
    await page.waitForLoadState('load')
    
    //Type ‘Dashboard’ in the search box and click on the Service link. 
    await page.locator("[data-label='Dashboards']").click()
    await page.waitForLoadState('load') 

    // Click Leads Tab
    await page.locator("[title='Leads']").first().click()
    await page.waitForLoadState('load')

    // instance creation
    const uName = updateLead()
    LName = (await uName).lName

    // search Leads Name
    await page.locator("[name='Lead-search-input']").fill(LName)
    await page.keyboard.press('Enter')
    await page.waitForLoadState('load')


    //Select row
    await page.locator("[data-refid='recordId']").first().click()
    await page.waitForLoadState('load')


    //Select drop down to delete
    await page.locator("[class='slds-button slds-button_icon-border-filled']").click()
    await page.getByText('Delete').click()
    await page.waitForLoadState('load')

    //Confirm Deletion
    await page.locator("[title='Delete']").nth(1).click()
    await page.waitForLoadState('load')

}

export {deleteLead}

