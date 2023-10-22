import { Component, Input } from '@angular/core';
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
  }]
 }
