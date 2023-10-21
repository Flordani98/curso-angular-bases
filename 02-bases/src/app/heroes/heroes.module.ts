import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"; //*para utilizar las directivas ngIf ngFor, ademas hay que importarla
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent,
        ListComponent
    ],
    imports:[
        CommonModule
    ]

})
export class HeroesModule {

}