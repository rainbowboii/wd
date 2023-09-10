import { $ } from '@wdio/globals';
import loginPage from '../pages/login.page.js';

class InvPage
{ 
    get leftCButton (){
        return $("#react-burger-menu-btn");
    }

    get inv  (){
        return $("#inventory_sidebar_link");
    }

    get about (){
        return $("#about_sidebar_link");
    }

    get logout (){
        return $("#logout_sidebar_link");
    }

    get reset (){
        return $("#reset_sidebar_link");
    }

    get menu (){
        return $("(//div[@class='bm-menu-wrap']//div)[1]");
    }

    get atcBackpack (){
        return $("#add-to-cart-sauce-labs-backpack");
    }

    get cartMark (){
        return $(".shopping_cart_badge");
    }
    
    get twitter (){
        return $("//li[@class='social_twitter']//a[1]")
    }

    get facebook (){
        return $("//li[@class='social_facebook']//a[1]")
    }

    get linkedin (){
        return $("//li[@class='social_linkedin']//a[1]")
    }

    get product (){
        return $("(//div[@class='inventory_item_description']//div//a//div)[1]")
    }
    
    get sort (){
        return $("//select[@data-test='product_sort_container']")
    }

    get AZ (){
        return $("//option[text()='Name (A to Z)']")
    }

    get ZA (){
        return $("//option[text()='Name (Z to A)']")
    }

    get lowHigh (){
        return $("//option[text()='Price (low to high)']")
    }

    get highLow (){
        return $("//option[text()='Price (high to low)']")
    }

    get cart (){
        return $("//div[@class='shopping_cart_container']//a[1]")
    }

    get price () {
        return $("(//div[@class='inventory_item_price'])[1]")
    }


    async expandedCButton () {
        (await this.leftCButton).click();
            await expect(this.menu).toBeDisplayed
              (  
               this.inv, 
               this.about, 
               this.logout,
               this.reset
               );
    }
    async expectLogout () {
        (await this.logout).click();
            await expect (loginPage.signField).toBeDisplayed
              (
               loginPage.loginField, 
               loginPage.passField
               );  
    }
}
export default new InvPage();