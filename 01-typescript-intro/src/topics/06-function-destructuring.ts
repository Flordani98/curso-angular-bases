export interface Product {
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

// function taxCalculation( options: TaxCalculationOptions ): [number, number] { //si la funcion recibe  mas de 3 argumentos hay que crear un objeto(clean code)
// function taxCalculation( {tax, products}: TaxCalculationOptions ): [number, number] { //si la funcion recibe  mas de 3 argumentos hay que crear un objeto(clean code)
export function taxCalculation( options: TaxCalculationOptions ): [number, number] { //si la funcion recibe  mas de 3 argumentos hay que crear un objeto(clean code)

    const { tax,products} = options;

    let total = 0;
    
    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet]; //carrito de compras que llevo para comprar
export const tax = 0.15; //impuesto de compra

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log('Total', total);
console.log('Tax', taxTotal);


