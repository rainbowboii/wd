import { $ } from '@wdio/globals';

class CartPage
{
    get cartProduct (){
        return $("//div[@class='cart_item_label']//a//div")
    }

    get checkoutButton () {
        return $("#checkout")
    }

    get firstName () {
        return $('#first-name')
    }

    get lastName () {
        return $('#last-name')
    }

    get postalCode () {
        return $('#postal-code')
    }

    get continueButton () {
        return $('#continue')
    }

    get price () {
        return $('.inventory_item_price')
    } 
    
    get finishButton () {
        return $('#finish')
    } 

    get itemTotalPriceLabel () {
        return $(".summary_subtotal_label")
    }
    
    get reviewBlock () {
        return $("#checkout_complete_container")
    }

    get review () {
        return $(".complete-header")
    }
    get backHomeButton () {
        return $("#back-to-products")
    }
    
    async getRandomArbitrary(length) {
        let result = '';
        const characters = '1234567890';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    async makeId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
}
export default new CartPage();