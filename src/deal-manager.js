export class DealManager {
    constructor() {
        this.deals = [];
    }

    get currentDeals() {
        return `There are currently ${this.deals.length} deals!`;
    }

    addDeal(store, item, price) {
        this.deals.push({
            "store": store,
            "item": item,
            "price": price
        });
    }
}