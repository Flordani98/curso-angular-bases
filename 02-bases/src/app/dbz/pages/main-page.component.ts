import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{

    //voy a inyectar mi dbz service (mi servicio)
    //esto me va a habilitar en todo mi componente main page, toda la informacion que este siendo utilizada en el servicio
  constructor( private dbzService: DbzService ){ //es una buena practica que nuestros servicios sean privados
  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }
  
  onDeleteCharacter(id: string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzService.addCharacter(character);
  }


}