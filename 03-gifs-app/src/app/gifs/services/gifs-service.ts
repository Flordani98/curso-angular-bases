import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY = '73AF1hqMK7amjN6WEcpbxjGEXyGAAu10'

@Injectable({
  providedIn: 'root' //con este atributo hacemos q este servicio este disponible para toda la app que injecte este servicio
})
export class GifsService {

  //atributo donde almacenaremos los gifs
  public gifsList: Gif[] = [];

  //propiedad para almacenar todo lo que el usuario va buscando (como un historial)
  private _tagsHistory: string[] = [];
  private apiKey: string = '73AF1hqMK7amjN6WEcpbxjGEXyGAAu10';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  
  constructor(private http: HttpClient) { 
    this.loadLocalStorage(); //cuando mi servicio sea inyectado la primera vez se va a cargar el local storage
    console.log('Gifs service ready');

  }


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

    this.saveLocalStorage(); //cada vez q se agrega un tag, se guarda en el local storage
  }

  //*metodo para guardar en el local storage
  private saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify( this._tagsHistory)); //pasa a un (1) string todo los tags
  }

  //*para cargar el localStorage
  private loadLocalStorage():void{

    if(!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!) //se pasa de 1(string) a un arreglo de strings[]

    if(this._tagsHistory.length === 0) return;
    this.searchTag(this.tagsHistory[0]); //para que se carguen los gifs del primer tag del historial

  }


  searchTag(tag:string):void {
    this.organizeHistory(tag);
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=73AF1hqMK7amjN6WEcpbxjGEXyGAAu10&q=valorant&limit=10')
    // .then//no vamos a utilizar el fetch ya que vamos a trabajar mucho con 
    //peticiones con http(si fueran pocas consultas o algo muy chico podriamos utilzar el fetch), ademas tal vez queramos 
    //cancelar, o utilizar interceptores o suscribers(suscribirnos a la respuesta)

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag)
     
    //angular ya viene con este objeto muy fuerte para trabajar con peticiones HTTP, el cual hay que importar
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params}) 
    //este es un OBSERVABLE, no es una promesa
    .subscribe( (resp:SearchResponse) => { //para escuchar la respuesta me suscribo
      this.gifsList = resp.data;
    }) 

    //realizar una peticion http min 7:18
  }


  
}
