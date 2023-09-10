import { expect, browser } from '@wdio/globals'
import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';
import cartPage from '../pages/cart.page.js'
let postal = await cartPage.getRandomArbitrary(5);
let firstname = await cartPage.makeId(6);
let lastname = await cartPage.makeId(6);
    before('navigation and login', async () =>{
        await loginPage.open('https://www.saucedemo.com/');
        await loginPage.logIn("standard_user", "secret_sauce");
    });
    it ('valid checkout', async () => {
        let item = 'Sauce Labs Backpack';
        await expect(inventoryPage.cartMark).not.toBeDisplayed();
        await expect(inventoryPage.product).toHaveText(item);
        (await inventoryPage.atcBackpack).click();
        await expect(inventoryPage.cartMark).toBeDisplayed();
        let price = await (await inventoryPage.price).getText();
        (await inventoryPage.cart).click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
        await expect(cartPage.cartProduct).toHaveText(item);
        (await cartPage.checkoutButton).click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html");
        (await cartPage.firstName).addValue(firstname);
        (await cartPage.lastName).addValue(lastname);
        (await cartPage.postalCode).addValue(postal);
        await browser.pause(3000);
        let fNValue = await (await cartPage.firstName).getValue();
        let lNValue = await (await cartPage.lastName).getValue();
        let pCValue = await (await cartPage.postalCode).getValue();
        await expect(fNValue).toContain(firstname);
        await expect(lNValue).toContain(lastname);
        await expect(pCValue).toContain(postal);
        (await cartPage.continueButton).click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-two.html");
        await expect(cartPage.price).toHaveText(price);
        await expect(cartPage.itemTotalPriceLabel).toHaveTextContaining(price);
        (await cartPage.finishButton).click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
        await expect(cartPage.reviewBlock).toBeDisplayed(cartPage.review);
        (await cartPage.backHomeButton).click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await expect(inventoryPage.cartMark).not.toBeDisplayed();

    })