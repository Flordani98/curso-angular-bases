import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onNewTerm: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtSearchInput') //pide 1 o 2 argumentos, el cual el argumento es el selector(o funcion, etc) el nombre del html que quiero tomar, 
  public termInput!: ElementRef<HTMLInputElement> //especificamos el tipo de elemento que hacemos referencia
  //*@ViewChild: decorador de propiedades te permite acceder y manipular el elemento HTML en tu componente, por ejemplo, para obtener o establecer el valor del input, escuchar eventos, etc.
  
  onValuee(){ 
    const newTerm:string = this.termInput.nativeElement.value;
    this.onNewTerm.emit(newTerm);
  }

  //TODO: falta por ver countries service- restcountries
}
