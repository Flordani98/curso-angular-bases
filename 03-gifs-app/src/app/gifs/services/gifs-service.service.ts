import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //con este atributo hacemos q este servicio este disponible para toda la app que injecte este servicio
})
export class GifsService {

  //propiedad para almacenar todo lo que el usuario va buscando (como un historial)
  private _tagsHistory: string[] = [];

  
  constructor() { }


  get tagsHistory(){
    return [...this._tagsHistory];//utilizo el operador spread para realizar una copia del atributo tagsHistory
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);

  }

  searchTag(tag:string):void {
    this.organizeHistory(tag);
  }


  
}
