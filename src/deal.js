import {inject, customElement, bindable} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {DealManager} from './deal-manager';

@inject(DealManager, Router)
@customElement('deal')
export class Deal {
    @bindable index;
    
    constructor(dealManager, router) {
        this.dealManager = dealManager;
        this.router = router;
    }

    clearInputs() {
        this.store = '';
        this.item = '';
        this.price = '';
    }

    bind() {
        if(this.index && this.dealManager.deals.length > this.index) {
            var dealToEdit = this.dealManager.deals[this.index];
            this.store = dealToEdit.store;
            this.item = dealToEdit.item;
            this.price = dealToEdit.price;
        }
    }
    
    saveDeal() {
        if(!this.index) {
            this.dealManager.addDeal(this.store, this.item, this.price);
            this.clearInputs();
        }
        else {
            this.dealManager.editDeal(this.index, this.store, this.item, this.price);
        }
        
        this.router.navigateToRoute('deals');
    }
}