import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [ //*estas son las definiciones de cada una de mis rutas y tienen varias configuraciones
    // {
    //     path: '',//*segmento de la url q nosotros ocupamos para mostrar el homepage
    //     component: HomePageComponent //*que componente vamos a mostrar
    // },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    { //*Lazy Load
        path: 'countries', //*Para que mi app reconozca mi modulo Countries, tengo que definir la ruta AQUI, en el routing
        loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule) //*aca no estamos cargando un componente,
        //* sino q vamos a cargar unos hijos
    
  
        //*import(), 1er parametro: el path,es un string donde se encuentra ese modulo q quiero cargar pero de manera
        //*estatica, donde va a encontrar el router

        //*definimos una funcion de carga, en el cual llamamos al import, el import es una promesa, resuelve una promesa
        //*si la promesa se resuelve bien (.then) , vamos a obtener un modulo y de ese modulo vamos a cargar el 
        //*CountryModule


    },
    {
        path: '**', //*comodin: para cualquier otra ruta que no este definida en mi router
        redirectTo: 'countries'//se redirecciona el path home
    }
]

@NgModule({

    imports: [
        RouterModule.forRoot( routes )//*este router depende mucho de si, es el primer router o el segundo.
        //*Como este es el router principal, lo implementamos con el .forRoot y enviamos nuestras definiciones 
        //*de rutas, sino utilizaremos el .forChild
        //*el router.forRoot es el principal, el primero, del cual se desprenden todos los demas routers .forChild
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }
