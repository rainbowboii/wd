import { expect } from '@wdio/globals'
import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';
    before('navigation and login', async () =>{
        await loginPage.open('https://www.saucedemo.com/');
        await loginPage.logIn("standard_user", "secret_sauce");
    });
    it ('saving the cart after logout', async () => {
        await expect(inventoryPage.cartMark).not.toBeDisplayed();
        (await inventoryPage.atcBackpack).click();
        await expect(inventoryPage.cartMark).toBeDisplayed();
        await inventoryPage.expandedCButton();
        await inventoryPage.expectLogout();
        await loginPage.logIn("standard_user", "secret_sauce");
        await expect(inventoryPage.cartMark).toBeDisplayed();    
         });