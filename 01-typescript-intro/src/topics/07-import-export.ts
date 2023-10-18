// import {Product} from './06-function-destructuring';
// import {taxCalculation} from './06-function-destructuring';
// import {tax} from './06-function-destructuring';

import {Product, taxCalculation, tax} from './06-function-destructuring';




const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price:160
    }
];



const [total, taxTotal] = taxCalculation({
    
    products: shoppingCart, 
    tax: tax,
});

console.log(total);
console.log(taxTotal);