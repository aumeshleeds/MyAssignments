import { chromium } from "@playwright/test";
import { getAccessToken } from "../Week5/Day10/auth_helper.spec";
import { createLead } from "./create_lead.spec";

import { request } from "http";

let accessToken:string;
let inst_url:string;
let uName:string;

async function updateLead()  {

    const authData = await getAccessToken()
    accessToken = authData.accessToken;
    inst_url = authData.inst_url

    const browser = await  chromium.launch()
    const browserContext = await browser.newContext()
    const apiRequestContext = browserContext.request

    const creatLeadID = await createLead()
    let createLeadid = creatLeadID.dLeadID
    uName = "UmeshNew"
    let leadUrl = `${inst_url}/services/data/v59.0/sobjects/Lead/${createLeadid}`
        const updateLead = await apiRequestContext.patch(leadUrl,{
            
            headers: {
        
                "Authorization": `Bearer ${accessToken}`,
                "Connection": "keep-alive"        
        
            },
            data:{
                    "FirstName": uName,
                    "LastName": "A",
                    "Company": "Eagle"
                }
        })
        console.log(updateLead.status())    
        return{
            lName: uName
        }        
}

export {updateLead}