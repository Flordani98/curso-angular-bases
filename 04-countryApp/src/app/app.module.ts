import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule, //*Importamos el modulo de routing root
    BrowserModule,
    SharedModule,
    HttpClientModule //*importo el HTTClient para poder utilizarlo en mis servicios,  lo importo aqui ya q lo voy 
    //*a usar en varios lugares
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
