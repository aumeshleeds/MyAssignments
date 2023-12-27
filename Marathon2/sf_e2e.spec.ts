import { test, expect, chromium } from "@playwright/test"
import { createDashboard } from "./create_dashboard.spec"
import { getDashboard } from "./get_dashboard.spec";
import { deleteDashboard } from "./delete_dashboard.spec";

let dbName:string;
let dbId:string;

test("Use Create Dashboard in test from the function", async () =>{
    const createDboard = await createDashboard()
    dbName = createDboard.DashName
    console.log(dbName)
})

test("Use Get Dashboard in test from the function", async() => {
    const getDboard = await getDashboard()
    dbId = getDboard.dBaseID
})

test("Use Delete Dashboard in test from the function", async() => {
    const delBoard = await deleteDashboard()
})

