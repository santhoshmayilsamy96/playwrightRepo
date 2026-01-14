import {register} from "../locator/locator"


export class HomePage{
    /**
     * @param {import('@playwright/test').Page} page */
    constructor(page){
        this.page=page
    }
    
    async hoverMyAccount(){
         this.page.getByRole('link', { name: register.myAccount})
    }
    async clickRegister(){
         this.page.getByRole('link', { name: register.clickRegister})
    }

}
