/*
2 .ServiceNow -Ordering Mobile(Frames)
---------------------------
Note: Steps to create your instance is attached under reference document. Kindly create your own instance and automate the application

1. Launch ServiceNow application
2. Login with valid credentials 
3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
4. Click on  mobiles
5. Select Apple iphone13pro
6. Choose yes option in lost or broken iPhone
7. Enter phonenumber as 99 in original phonenumber field
8. Select Unlimited from the dropdown in Monthly data allowance
9. Update color field to SierraBlue and storage field to 512GB
10. Click on Order now option
11. Verify order is placed
 
Sample instance and credentials
Url to be loaded
https://dev205797.service-now.com/
Credentials
Username: admin
Password; Testleaf@123
*/

import { test, chromium, expect } from "@playwright/test"

test("Assignment on ServiceNow", async ({page,context}) => {

    // Launch ServiceNow application
    await page.goto("https://dev197883.service-now.com");
    await page.waitForLoadState('load')

    // Login with valid credentials 
    await page.fill("#user_name", "admin")
    await page.fill("#user_password", "Testleaf@123")
    await page.click("#sysverb_login")
    await page.waitForLoadState('load')

    
    // Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
    await page.getByRole('button', {name:"All"}).click()
    await page.waitForLoadState('load')
    await page.getByText('Service Catalog', {exact:true}).click()

    // Click on  mobiles
    const frameLocator = page.frameLocator('iframe').first();
    await frameLocator.locator("[alt='Mobiles']").click();

    // Select Apple iphone13pro
    await frameLocator.locator("[class='service_catalog']").nth(2).click();
    
    // Choose yes option in lost or broken iPhone
    await frameLocator.locator("[class='radio-label']").first().click();

    // Enter phonenumber as 99 in original phonenumber field
    await page.waitForLoadState('load')
    await frameLocator.locator("[class='cat_item_option sc-content-pad form-control']").fill("99");
    
    // Select Unlimited from the dropdown in Monthly data allowance
    await frameLocator.locator('select[class="form-control cat_item_option "]').selectOption("unlimited")
    
    // Update color field to SierraBlue and storage field to 512GB
    await frameLocator.locator("[class='radio-label']").nth(6).click();
    await frameLocator.locator("[class='radio-label']").last().click();

    // Click on Order now option
    await frameLocator.locator("#oi_order_now_button").click()
    // Verify order is placed    
    const orderNumber = await frameLocator.locator("#requesturl").innerText()
    console.log(`The Order number is : ${orderNumber}`)
    
})
