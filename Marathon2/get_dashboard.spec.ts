import { chromium } from "@playwright/test";
import { getAccessToken } from "../Week5/Day10/auth_helper.spec";
import { request } from "http";

let accessToken:string;
let inst_url:string;

async function getDashboard()  {

    const authData = await getAccessToken()
    accessToken = authData.accessToken;
    inst_url = authData.inst_url

    const browser = await  chromium.launch()
    const browserContext = await browser.newContext()
    const apiRequestContext = browserContext.request

    let dashboardUrl = `${inst_url}/services/data/v58.0/sobjects/Dashboard`
        const dashboard = await apiRequestContext.get(dashboardUrl,{
            
            headers: {
        
                "Authorization": `Bearer ${accessToken}`,
                "Connection": "keep-alive"        
        
            }
        })
        const resp = await dashboard.json()

        return {
            dBaseID: resp.recentItems[0].Id 
        }
        console.log(resp.recentItems[0].Id)
        console.log(dashboard.status())

    
}

export {getDashboard}