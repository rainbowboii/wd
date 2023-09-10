import loginPage from '../pages/login.page.js'
import inventoryPage from '../pages/inventory.page.js';
   before('navigation and login', async () => {
            await loginPage.open('https://www.saucedemo.com/');
            await loginPage.logIn("problem_user", "secret_sauce");
         });     
   it('logout', async () => {
      await inventoryPage.expandedCButton();
      await inventoryPage.expectLogout();
         });