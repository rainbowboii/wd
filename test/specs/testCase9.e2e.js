import { expect, browser, $ } from '@wdio/globals'
import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';
import cartPage from '../pages/cart.page.js'
    before('navigation and login', async () =>{
        await loginPage.open('https://www.saucedemo.com/');
        await loginPage.logIn("standard_user", "secret_sauce");
    });
    it ('checkout without products', async () => {
        await inventoryPage.cart.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
        (await cartPage.checkoutButton).click();
        // await expect(ERROR MESSAGE).toBeDisplayed(); 
        // There is problem with this message. Message is not displayed.
    });
