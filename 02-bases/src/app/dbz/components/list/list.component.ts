import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input() //con este decorador puedo recibir una propiedad de un componente padre
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public deletedCharacter: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index: number):void{
    //TODO: Emitir el ID del personaje
    this.deletedCharacter.emit(index)
    console.log(index);
  }


 }
