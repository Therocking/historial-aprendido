import { Component } from '@angular/core';

interface Hero {
  name: string
  age: number
  alias: string
}

const heroesList: Hero[] = [
  {name: 'Peter Parker', age: 25, alias: 'Spiderman'},
  {name: 'Bruce Banner', age: 50, alias: 'Hulk'},
  {name: 'Steve Rogers', age: 90, alias: 'Captain America'},
]

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public heroName: string = 'Iron Man'
  public name: string = 'Anthony Stark'
  public age: number = 35
  public changeHeroClick: number = 0

  public get capitalizaName() : string {
    return this.name.toUpperCase()
  }

  public getHeroeDescription(): string {
    return `${this.name} (alias)${this.heroName} - ${this.age}`
  }

  public changeHero(): void {
    const hero = this.ramdonHero()
    this.changeHeroClick++

    this.name = hero.name
    this.age = hero.age
    this.heroName = hero.alias
  }

  private ramdonHero(): Hero {
    const ramdonNum = Math.floor(Math.random() * heroesList.length)
    return heroesList[ramdonNum]
  }
}
