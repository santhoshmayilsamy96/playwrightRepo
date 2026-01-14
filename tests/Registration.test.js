import {test} from "@playwright/test"
import {RegisterPage} from "../page/RgisterPage.page"

test("Registration for the new user",async({page})=>{
    const regPage =new RegisterPage(page)
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
    await regPage.enterFirstName("Santhosh");
    await regPage.enterLastName("Mayilsamy");
    await page.waitForTimeout(5000)
})
