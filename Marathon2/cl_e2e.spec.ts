import { test, expect, chromium } from "@playwright/test"
import { createLead } from "./create_lead.spec";
import { updateLead } from "./update_lead.spec";
import { deleteLead } from "./delete_lead.spec";

let LeadId:string;
let LeadUpdId:string;
let dbId:string;

test("Use Create Lead in test from the function", async () =>{
    const cLead = await createLead()
    LeadId = cLead.dLeadID
    console.log(LeadId)
})

test("Use Update Lead in test from the function", async () =>{
    const uLead = await updateLead()
})

test("Use Delete Lead in test from the function", async () =>{
    const dLead = await deleteLead()
})


