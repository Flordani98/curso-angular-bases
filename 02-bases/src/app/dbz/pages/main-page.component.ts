import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{
    public characters: Character[] = [{
        name: 'Krillin',
        power: 1000
    },{
        name:'Goku',
        power: 9500
    },{
        name: 'Vegeta',
        power: 7500
    }];


    onNewCharacter(character: Character): void {
        this.characters.push(character);
    }

    onDeleteCharacter(index: number): void{
        this.characters.splice(index, 1);
        console.log(index);
        console.log(this.characters);
    }
    
}