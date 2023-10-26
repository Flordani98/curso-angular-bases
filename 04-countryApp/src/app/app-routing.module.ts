import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [ //*estas son las definiciones de cada una de mis rutas y tienen varias configuraciones
    {
        path: '',//*segmento de la url q nosotros ocupamos para mostrar el homepage
        component: HomePageComponent //*que componente vamos a mostrar
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: '**', //*comodin: para cualquier otra ruta que no este definida en mi router
        redirectTo: 'home'//se redirecciona el path home
    }
]

@NgModule({

    imports: [
        RouterModule.forRoot( routes ), //*este router depende mucho de si, es el primer router o el segundo.
        //*Como este es el router principal, lo implementamos con el .forRoot y enviamos nuestras definiciones de rutas, sino utilizaremos el .forChild
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }
