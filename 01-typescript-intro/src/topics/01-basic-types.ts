
const name: string = "Florencia";
let edad: number | "cien" = 95; //estamos declarando que la variable puede ser de tipo number o puede tomar el valor "cien"
const isAlive: boolean = true;

edad = "cien";

console.log({
    name, edad, isAlive
})


export{}