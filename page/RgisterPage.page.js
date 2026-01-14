import {register} from "../locator/locator"
export class RegisterPage{
    /**@param {import("@playwright/test").Page} page */
    constructor(page){
        this.page=page
    }
    async enterFirstName(Fname){
         await this.page.locator(register.firstName).fill(Fname)
    }
    async enterLastName(Lname){
        await this.page.locator(register.lastName).fill(Lname)
    }
}