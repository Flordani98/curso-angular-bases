import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs-service.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
//viewchild: nos sirve para poder tomar una referencia local
  @ViewChild('txtTagInput') //pide 1 o 2 argumentos, el cual el argumento es el selector(o funcion, etc) el nombre del html que quiero tomar, 
  public tagInput!: ElementRef<HTMLInputElement> //especificamos el tipo de elemento que hacemos referencia

  constructor(private gifsService: GifsService){ //injectamos el servicio
  
  
  }
  // searchTag(newTag: string){
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }

}
