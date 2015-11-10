import {inject} from 'aurelia-framework';
import {DealManager} from './deal-manager';

@inject(DealManager)
export class Deal {
    constructor(dealManager) {
        this.dealManager = dealManager;
        this.clearInputs();
    }

    clearInputs() {
        this.store = '';
        this.item = '';
        this.price = '';
    }

    addDeal() {
        this.dealManager.addDeal(this.store, this.item, this.price);
        this.clearInputs();
    }
}