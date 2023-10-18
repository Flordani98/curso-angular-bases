
export class Person{
    //en angular es mas comun codificar el constructor de esta manera:
    // public name: string; 
    // private address: string;
    
    constructor(//en typescript es mas comun codificar el constructor de esta manera: con los modificadores de acceso en los parametros
    //y no hace falta utilizar el this de esta manera 
        public name: string, 
        // private address: string = 'No Address'
        public address: string = 'No Address'
        ){}
}

// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,

//     ){
//         super(realName, 'New York')
//     }
// }

// const ironMan = new Person('Iron man', 'New york');
// const ironMan = new Hero('Iron man', 45, 'Tony',);

// console.log(ironMan);
// console.log(ironMan.address); cuando se transpile esto, aun asi, la direccion se muestra en la consola, ya que este codigo se 
//convierte a js  y en js es completamente valido ya que en js no existen los modificadores de acceso


//la herencia esta bien utilizarla, pero ya cuando hay muchos niveles es complicada la legibilidad del codigo
//vamos a priorizar la composición sobre la herencia
export class Hero{

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person : Person, //de esta manera si la clase persona cambia, solo va a afectar a la clase persona

    ){
        // this.person = new Person(realName);
    }
}

const tony = new Person('Tony', 'New York'); 
const ironMan = new Hero('Iron man', 45, 'Tony', tony);

console.log(ironMan);