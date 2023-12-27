import { chromium } from "@playwright/test";
import loginData from "../../testdata/loginData.json"


let DName:string;

async function createDashboard()  {

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

    // Click Create New Dashboard
    await page.locator("[title='New Dashboard']").first().click()
    await page.waitForLoadState('load')

    
    // Enter Dashboard name and clikc create
    const frameLocator = page.frameLocator('[title="dashboard"]').first();
    //await frameLocator.locator('#Click').click();
    DName = "Umesh4"
    await frameLocator.locator("#dashboardNameInput").fill(DName)
    await frameLocator.locator("#submitBtn").click()
    await page.waitForLoadState('load')

    // Save Dashboard
    await frameLocator.locator("[class='actionRibbon']").click()

    return{
        DashName : DName
    }

}

export {createDashboard}

