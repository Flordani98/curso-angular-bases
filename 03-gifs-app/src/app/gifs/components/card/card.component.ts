import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})

//OnInit es un metodo especial del ciclo de vida de los componentes de angular que se va a ejecutar cuando el 
//componente se haya inicializado
export class CardComponent implements OnInit{
  
  @Input()
  public gifRecibido!: Gif;
  //utiizo el ! para que no me pida inicializarlo, le estoy diciendo que siempre va a recibir un gif
  
  //validacion de que el gif que se reciba sea de tipo gif, if gif es undefined se lanza una excepción
  ngOnInit(): void {
    if(!this.gifRecibido) throw new Error('Gif property is required')
  }
}
