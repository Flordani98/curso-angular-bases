
export interface Passenger{
    name: string;
    children?: string[];

}

const pasenger1: Passenger = {
    name: "Florencia",
}

const pasenger2: Passenger = {
    name: "Eze",
    children: ["Natalia", 'Melisa'],
}

const printChildren = ( passenger: Passenger) => {
    const howManyhildren = passenger.children?.length || 0; //si el pasajero tiene niños, devuelve el length, 
    //sino tiene niños el pasajero entonces ejecuta la intruccion despues del || (or), por lo que devuelve 0
    //si la instruccion no estuviera (el ||) entonces devuelve "undefined"
    
    // const howManyhildren = passenger.children!.length; //con el ! le digo que SIEMPRE va a recibir children 
    //el operador ! se llama non-null assertion operator


    console.log(howManyhildren);

    return howManyhildren;
}


printChildren(pasenger2);

console.log(pasenger1);