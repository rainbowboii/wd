import { expect, browser } from '@wdio/globals'
import loginPage from '../pages/login.page.js';
    before('open page', async () =>{
        await loginPage.open('https://www.saucedemo.com/');
        });
    it ('valid login', async () => {
        (await loginPage.loginField).addValue("problem_user");
        (await loginPage.passField).addValue("secret_sauce");
        let loginValue = await (await loginPage.loginField).getValue();
        let passValue = await (await loginPage.passField).getValue();
        await expect(loginValue).toContain("problem_user");
        await expect(passValue).toContain("secret_sauce");
        await expect(await loginPage.passField).toHaveAttr("type", "password");
        (await loginPage.loginButton).click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
       });

    


