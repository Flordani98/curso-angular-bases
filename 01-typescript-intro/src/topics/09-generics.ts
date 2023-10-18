
//tratar de no utilizar any ya q cuando se utiliza se le quita todas las restricciones que TypeScript tiene 
//en su lugar podemos utilizar genericos

export function whatsMyType<T>(argument: T): T{
    return argument;
}

let amIString = whatsMyType<string>('Hola mundo'); //le digo a la funcion que el parametro es especificamente un string, sino coloco en el parametro el string me marca error
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString);
console.log(amINumber);
console.log(amIArray);