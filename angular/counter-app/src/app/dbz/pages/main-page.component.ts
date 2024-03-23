import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { ICharacter } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    constructor(private dbzService: DbzService) {
    }

    get characters(): ICharacter[] {
        return this.dbzService.characters
    }

    public onDeleteCharacter(id: string): void{
        this.dbzService.DeleteCharacterById(id)
    }

    public onNewCharacter(character: ICharacter): void {
        this.dbzService.AddNewCharacter(character)
    }
}