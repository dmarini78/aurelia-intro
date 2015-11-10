export class CurrencyValueConverter {
   toView(value) {
       return `$${parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
   }
}