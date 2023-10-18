
//tratar de no utilizar any ya q cuando se utiliza se le quita todas las restricciones que TypeScript tiene 

export function whatsMyType(argument: any):any{
    return argument
}

const amIString = whatsMyType('Hola mundo');
