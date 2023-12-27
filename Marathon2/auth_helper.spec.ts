import { chromium } from "@playwright/test";

async function getAccessToken() {

    const browser = await  chromium.launch()
    const browserContext = await browser.newContext()
    const apiRequestContext = browserContext.request

    const client_id = '3MVG9pRzvMkjMb6kNqBWYM_W9sOygvaxH9mTVF2tv9PrsIJ7szNtOjbUpgfgRoI07FhWS9Bbm1TYLdeWLX7Gz'
    const client_secret = '2C90AF5E5DBEF784FA8999C681D58C29629055F1629C4F09BAA37C8E9F1AC41D'
    const username = 'aumesh2024@testleaf.com'
    const password = 'Testleaf@123'
    const url = 'https://login.salesforce.com/services/oauth2/token'

    const generatingToken = await apiRequestContext.post(url, {

        headers:{

            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
        },
        form:{

            "grant_type": "password",
            "client_id": client_id,
            "client_secret": client_secret ,
            "username": username,
            "password": password,

        }
    })
    const generatingTokenJson = await generatingToken.json()
    //console.log(generatingTokenJson)
    
    return{
        accessToken : generatingTokenJson.access_token,
        inst_url: generatingTokenJson.instance_url
    }

    
}
export {getAccessToken}
