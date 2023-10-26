import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule /*solo necesito importar el ROUTERMODULE en el SHARED para poder utilzar */
    // AppRoutingModule*ERROR
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    ContactPageComponent
  ]
})
export class SharedModule { }
