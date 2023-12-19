/*1. MergeContact (Alert and windowHandle) 
-----------		  
1. Launch URL "http://leaftaps.com/opentaps/control/login"
2. Enter UserName and Password Using Id Locator
3. Click on Login Button using Class Locator
4. Click on CRM/SFA Link
5. Click on contacts Button
6. Click on Merge Contacts using Xpath Locator
7. Click on Widget of From Contact
8. Click on First Resulting Contact
9. Click on Widget of To Contact
10. Click on Second Resulting Contact
11. Click on Merge button using Xpath Locator
12. Accept the Alert
13. Verify the title of the page
*/



import { test, chromium, expect } from "@playwright/test"

test("Assignment on Frame", async ({page,context}) => {

    //Launch URL "http://leaftaps.com/opentaps/control/login"
    await page.goto("http://leaftaps.com/opentaps/control/login");
    await page.waitForLoadState('load')
    //Accept the Alert
    page.once('dialog', async dialog =>{

        const text = dialog.message();
        console.log(`Message: ${text}`);
        const type = dialog.type();
        console.log(`I am from ${type}`);
        await dialog.accept();     

    })

    //Enter UserName and Password Using Id Locator
    await page.fill('#username', 'Demosalesmanager')
    await page.fill('input[type=password]', 'crmsfa')
    //Click on Login Button using Class Locator
    await page.click('.decorativeSubmit')
    await page.waitForLoadState('load')
    //Click on CRM/SFA Link
    await page.getByText('CRM/SFA').click();
    await page.waitForLoadState('load')
    //Click on contacts Button
    await page.getByText('Contacts',{exact:true}).click();
    await page.waitForLoadState('load')
    //Click on Merge Contacts using Xpath Locator
    await page.locator("//*[text()='Merge Contacts']").click()    
    
    //Click on Widget of From Contact
    const windowPromise = context. waitForEvent("page");
    await page.locator("[alt='Lookup']").first().click()
    const fromContact = await windowPromise;
    await page.waitForLoadState('load')

    //Click on First Resulting Contact
    await fromContact.locator("[class='linktext']").first().click()

    //Click on Widget of To Contact
    const [toContact] = await Promise.all([
        context.waitForEvent("page"),
        await page.locator("[alt='Lookup']").nth(1).click(),
    ])
    await page.waitForLoadState('load')

    //Click on Second Resulting Contact
    await toContact.locator("[class='linktext']").nth(4).click()
    //Click on Merge button using Xpath Locator
    await page.locator(".buttonDangerous").click()
    await page.waitForLoadState('load')
    //Verify the title of the page
    const title = await page.title()
    console.log(`The page title is : ${title}`)

})

