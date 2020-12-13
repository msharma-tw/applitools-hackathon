import { Selector, t } from 'testcafe';

class HomePage {
    constructor() {
        this.blackColorFilter = Selector("#colors__Black")
        this.filterButton = Selector("#filterBtn")
        this.productList = Selector("#product_grid")
        this.firstBlackShoe = Selector('#DIV__colcolmd__210')
        this.secondBlackShoe = Selector('#DIV__colcolmd__235')
    }

    async clickOnBlackFilter() {
        await t.click(this.blackColorFilter);
    }

    async clickOnFilterButton() {
        await t.click(this.filterButton);
    }
}

export default new HomePage();