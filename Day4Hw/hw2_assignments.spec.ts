/*
Assignment: 2 Edit Lead http://leaftaps.com/opentaps/control/main 
1. Launch the browser 2. Enter the username 
3. Enter the password 4. Click Login 5. 
Click CRM/SFA link 6. Click Leads link 
7. Click on Create Lead 8. Enter company name 
9. Enter first name 10.Enter last name 
11.Click on Create Lead button 12.Click Edit 
13.Change the company name 14.Click Update */


import { test, expect, chromium } from "@playwright/test"

test("To launch browser", async ({page}) => {
    
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill('#username', 'Demosalesmanager')
    await page.fill('input[type=password]', 'crmsfa')
    await page.click('.decorativeSubmit')
    await page.getByText('CRM/SFA').click();
    const pageUrl =  page.url();
    await page.waitForLoadState('load')
    const pageTitle = await page.title()
    console.log(`The page url is : ${pageUrl} , and The Page title is : ${pageTitle}`)
    expect(pageTitle).toBe("My Home | opentaps CRM")
    await page.click('text=Leads');
    await page.click("text=Create Lead");
    await page.fill("#createLeadForm_companyName", "CompTest Name")
    await page.fill("#createLeadForm_firstName", "ForeNameTest")
    await page.locator("[name=lastName]").nth(2).fill("LastNameTest")
    await page.locator("[name=submitButton]").click()
    const leadName = await page.locator('#viewLead_companyName_sp').innerText()
    console.log(`The Created Lead Name is : ${leadName}`)
    await page.locator(".subMenuButton").nth(2).click()
    await page.waitForLoadState('load')
    await page.locator("#updateLeadForm_companyName").clear()
    await page.fill("#updateLeadForm_companyName", "CompTest Edited")
    await page.locator("input[class='smallSubmit']").nth(0).click()
    const editleadName = await page.locator('#viewLead_companyName_sp').innerText()
    console.log(`The Edited Lead Name is : ${editleadName}`)

    })