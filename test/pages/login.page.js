
import { $,browser } from '@wdio/globals';

class LoginPage
{ 
    get loginField (){
        return $('#user-name');
    }

    get passField (){
        return $('#password');
    }

    get loginButton (){
        return $('#login-button');
    }

    get logError (){
        return $("//h3[@data-test='error']");
    }

    get lX (){
        return $("#login_button_container > div > form > div:nth-child(1) > svg");
    }
    
    get pX (){
        return $("#login_button_container > div > form > div:nth-child(2) > svg");
    }

    get signField (){
        return $("(//div[@class='login_wrapper']//div)[1]");
    }

    async open (path) {
        await browser.url(path);
    }

    async logIn (login, password) {
        (await this.loginField).addValue(login);
        (await this.passField).addValue(password);
        (await this.loginButton).click();
    }
    
}
export default new LoginPage();
