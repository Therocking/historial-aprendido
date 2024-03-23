import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
    public characters: ICharacter[] = [{
        id: '1',
        name: 'Krillin',
        power: 1000
    },
    {
        id: '2',
        name: 'Goku',
        power: 9500
    },
    {
        id: '3',
        name: 'Vegeta',
        power: 7000
    }
    ]

    /**
     * onNewCharacter
     */
    public AddNewCharacter(character: ICharacter): void {
        this.characters.push(character)
    }

    public DeleteCharacterById(id: string): void {
        this.characters = this.characters.filter(c => c.id !== id)
    }
}