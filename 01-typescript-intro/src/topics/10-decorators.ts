//un decorador no es mas que una simple y comun funcion
//esta funcion se puede adjuntar a las clases
//los decoradores es una caracteristica que ha estado en forma experimental desde hace 12/13 años desde que salio la primera
//version de Angular2
//los decoradores le pueden añadir cierto comportamiento a nuestras clases
//las vamos a utilizar para indicar que tal clase es un servicio, componente, etc

function classDecorator<T extends { new(...args:any[]):{}}>(
    constructor: T
){

    return class extends constructor{
        newProperty = "New Property";
        hello = 'override';
    }
    
}


@classDecorator //decorador: añade una funcionalidad extra o cambia el comportamiento de la clase para que sea algo en particular
//un servicio, modulo,componente, etc.  Manteniendo la misma sintaxis de la clase
class SuperClass{
    public myProperty: string = 'Abc124';

    print(){
        console.log('Hola mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);