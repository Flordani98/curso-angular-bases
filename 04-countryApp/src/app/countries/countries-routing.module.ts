import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
    {
        path: 'by-capital',
        component: ByCapitalPageComponent
    },
    {
        path: 'by-country',
        component: ByCountryPageComponent
    },
    {
        path: 'by-region',
        component: ByRegionPageComponent
    },
    {
        path: 'by/:id', //*de esta manera, pedimos de manera dinamica un argumento, q se va a llamar id
        //*el countryPage va a recibir el argumento dinamico
        component: CountryPageComponent
    },
    {
        path: '**', //*comodin: para cualquier otra ruta que no este definida en mi router
        redirectTo: 'by-capital'//se redirecciona el path home
    }
]

@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ],
    
})
export class CountriesRoutingModule { }
