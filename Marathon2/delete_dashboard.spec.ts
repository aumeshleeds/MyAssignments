import { chromium } from "@playwright/test";
import { getAccessToken } from "../Week5/Day10/auth_helper.spec";
import { getDashboard } from "./get_dashboard.spec";

import { request } from "http";

let accessToken:string;
let inst_url:string;
let idDboard:string;

async function deleteDashboard()  {

    const authData = await getAccessToken()
    accessToken = authData.accessToken;
    inst_url = authData.inst_url

    const browser = await  chromium.launch()
    const browserContext = await browser.newContext()
    const apiRequestContext = browserContext.request

    const dbID = await getDashboard()
    idDboard = dbID.dBaseID

    let dashboardUrl = `${inst_url}/services/data/v58.0/sobjects/Dashboard/${idDboard}`
        const dashboard = await apiRequestContext.delete(dashboardUrl,{
            
            headers: {
        
                "Authorization": `Bearer ${accessToken}`,
                "Connection": "keep-alive"        
        
            }
        })
        console.log(dashboard.status())
    
}

export {deleteDashboard}