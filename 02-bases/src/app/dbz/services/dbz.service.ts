
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'; //importacion para implementar UUID, el "as" sirve para darle un alias a v4

@Injectable({providedIn: 'root'}) //si dejamos el providedIn: 'root' nuestro servicio va a ser un singleton en 
//toda nuestra aplicación, es decir vamos a obtener la misma instancia en toda la app

export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id: uuid(),
        name:'Goku',
        power: 9500
    },{
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }];


    addCharacter(character: Character): void { //ctrl + . para añadir las dependencias 
        const newCharacter: Character = {id: uuid(), ...character} //*con el "..." estoy diciendo toma todas estas propiedades
        //*(de character) y esparcelas en este objeto
        this.characters.push(newCharacter);
    }

    //*No es conveniente eliminar segun la posición del arreglo, ya que en un entorno real, podria ser que un usuario estaria
    //*agregando o eliminando, entonces la posicion se cambia y podriamos eliminar uno equivocado, por lo tanto, es 
    //*conveniente utilizar el UUID, es un paquete que nos sirve para generar identificadores unicos.

    // onDeleteCharacter(index: number): void{
    //     this.characters.splice(index, 1);
    // }
    deleteCharacterById(id: string): void{
        this.characters = this.characters.filter( character => character.id !== id);
    }
    
    
}