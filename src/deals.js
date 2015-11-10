import {inject} from 'aurelia-framework';
import {DealManager} from './deal-manager';


@inject(DealManager)
export class Deals {
    constructor(dealManager) {
        this.dealManager = dealManager;
    }
}
