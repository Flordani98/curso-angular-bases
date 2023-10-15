
function addNumbers(a: number,b: number) :number{ //especifico el tipo de retorno de la funcion
    return a + b;
}

const addNumbersArrow = (a:number, b:number):string =>{
    return `${a + b}`;
}
//Orden de parametros: parametros obligatorios, parametros opcionales, parametros opcionales con valor por defecto
function multiply( firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber*base;
}

const result: string = addNumbers(1, 2).toString();
const result2: string = addNumbersArrow(1, 2).toString();
const multiplyResult: number = multiply(5);

console.log({result, result2});
console.log(multiplyResult);

interface Character{
    name: string;
    hp: number;
    showHp: () => void; //para declarar una funcion
}


const healCharacter = (character: Character, amount: number) =>{
    character.hp += amount;
}

const strider: Character = {
    name: "strider",
    hp: 50,
    showHp(){
        console.log(`puntos de vida ${this.hp}`);
    }
}

healCharacter( strider, 10);
// healCharacter( strider, 40);
strider.showHp();

//VER: tarea sobre objetos e interfaces
export{};