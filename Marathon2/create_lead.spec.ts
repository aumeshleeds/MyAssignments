import { chromium } from "@playwright/test";
import { getAccessToken } from "../Week5/Day10/auth_helper.spec";
import { request } from "http";

let accessToken:string;
let inst_url:string;

async function createLead()  {

    const authData = await getAccessToken()
    accessToken = authData.accessToken;
    inst_url = authData.inst_url

    const browser = await  chromium.launch()
    const browserContext = await browser.newContext()
    const apiRequestContext = browserContext.request

    let leadUrl = `${inst_url}/services/data/v59.0/sobjects/Lead`
        const creatlead = await apiRequestContext.post(leadUrl,{
            
            headers: {
        
                "Authorization": `Bearer ${accessToken}`,
                "Connection": "keep-alive"        
        
            },
            data:{
                    "FirstName": "Umesh",
                    "LastName": "A",
                    "Company": "Eagle"
                }
        })
        const resp = await creatlead.json()
        console.log(resp.id)
        console.log(creatlead.status()) 

        return {
            dLeadID: resp.id 
        }
          
}

export {createLead}