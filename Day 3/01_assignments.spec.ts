/*Assignment - 1 (Login to Salesforce)

1) Open Salesforce Login Page https://login.salesforce.com
2) Enter the username
3) Enter the password
4) Click Login
5) Print the title and url
*/

import { test, chromium } from "@playwright/test"

test("To launch browser", async () => {

    const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browsercontext = await browser.newContext();
    const page = await browsercontext.newPage();

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "aumesh@testleaf.com");
    await page.fill("#password", "testleaf1");
    await page.locator("#Login").click();
    await page.waitForTimeout(10000)

    const pageTile = await page.title();
    console.log("The title is : "+pageTile)
    const pageUrl = await page.url();

    await page.waitForTimeout(5000)

    console.log(`The Title is ${pageTile} and url is ${pageUrl}`);
})