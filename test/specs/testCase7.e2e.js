import { expect, browser } from '@wdio/globals'
import loginPage from '../pages/login.page.js';
import inventoryPage from '../pages/inventory.page.js';
const twitter = "https://twitter.com/saucelabs"
const facebook = "https://www.facebook.com/saucelabs"
const linkedin = "https://www.linkedin.com/company/sauce-labs/"
const homePage = "https://www.saucedemo.com/inventory.html"
    before('navigation and login', async () =>{
        await loginPage.open('https://www.saucedemo.com/');
        await loginPage.logIn("standard_user", "secret_sauce");
    });
    it ('footer links', async () => {
        (await inventoryPage.twitter).click();
        await browser.pause(3000); //without this pause this tab cannot be launched at time and fails the test
        await browser.switchWindow(twitter)
        await expect(browser).toHaveUrl(twitter);
        await browser.switchWindow(homePage);
        await expect(browser).toHaveUrl(homePage);
        (await inventoryPage.facebook).click();
        await browser.pause(3000);//without this pause this tab cannot be launched at time and fails the test
        await browser.switchWindow(facebook);
        await expect(browser).toHaveUrl(facebook);
        await browser.switchWindow(homePage);
        await expect(browser).toHaveUrl(homePage);
        (await inventoryPage.linkedin).click();
        await browser.pause(3000);//without this pause this tab cannot be launched at time and fails the test
        await browser.switchWindow(linkedin);
        await expect(browser).toHaveUrl(linkedin);
        });
