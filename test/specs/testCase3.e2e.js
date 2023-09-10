import { expect } from '@wdio/globals'
import loginPage from '../pages/login.page.js'
         before('open page', async () =>{
            await loginPage.open('https://www.saucedemo.com/');
        });
         it('login with invalid login', async () => {
            (await loginPage.loginField).addValue("wrlogin");
            (await loginPage.passField).addValue("secret_sauce");
            await expect(await loginPage.passField).toHaveAttr("type", "password");
            (await loginPage.loginButton).click();
            await expect(loginPage.logError).toBeDisplayed();
            await expect(loginPage.lX).toBeDisplayed();
            await expect(loginPage.pX).toBeDisplayed();
         });
