import { Selector, t } from 'testcafe';

class ProductPage {

    constructor() {
        this.xNight = Selector("#DIV__colcolmd__210")
        this.productImgSection = Selector("#DIV__containerm__65")
        this.productDescSection = Selector("#DIV__prodinfove__75")
        this.productPriceSection = Selector("#DIV__collg__86")
        this.shoeName = Selector("#shoe_name")
        this.shoeImg = Selector("#shoe_img")
        this.rating = Selector("#SPAN__rating__76")
        this.description = Selector("#P____83")
        this.newPrice = Selector("#new_price")
        this.oldPrice = Selector("#old_price")
        this.discount = Selector("#discount")
        this.size = Selector("#DIV__row__88")
        this.quantity = Selector("#DIV__row__98")
        this.addToCartButton = Selector("#DIV__btnaddtoca__113")
    }

    async clickOnXNight() {
        await t.click(this.xNight)
    }
}

export default new ProductPage();