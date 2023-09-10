import { expect } from '@wdio/globals'
import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';
    before('navigation and login', async () =>{
        await loginPage.open('https://www.saucedemo.com/');
        await loginPage.logIn("standard_user", "secret_sauce");
    });
    it ('sorting', async () => {
        let itemAZ = 'Sauce Labs Backpack';
        let itemZA = 'Test.allTheThings() T-Shirt (Red)';
        let itemHighToLow = 'Sauce Labs Fleece Jacket';
        let itemLowToHigh = 'Sauce Labs Onesie';
        await inventoryPage.sort.click();
        await inventoryPage.AZ.click();
        await expect(inventoryPage.product).toHaveText(itemAZ);
        await inventoryPage.sort.click();
        await inventoryPage.ZA.click();
        await expect(inventoryPage.product).toHaveText(itemZA);
        await inventoryPage.sort.click();
        await inventoryPage.lowHigh.click();
        await expect(inventoryPage.product).toHaveText(itemLowToHigh);
        await inventoryPage.sort.click();
        await inventoryPage.highLow.click();
        await expect(inventoryPage.product).toHaveText(itemHighToLow);
        });