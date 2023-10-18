interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation( options: TaxCalculationOptions ): number[] { //si la funcion recibe  mas de 3 argumentos hay que crear un objeto(clean code)

    let total = 0;
    options.products.forEach( product => {
        total += product.price;
    });

    return [total, total*options.tax];
}

const shoppingCart = [phone, tablet]; //carrito de compras que llevo para comprar
const tax = 0.15; //impuesto de compra

const result = taxCalculation({
    products: shoppingCart,
    tax
});

console.log('Total', result[0]);
console.log('Tax', result[1]);


export{};