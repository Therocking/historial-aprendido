import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public heroesNames: string[] = ['Spiderman', 'Ironman', 'Hulk']
  public deletedHeroe?: string

  public deleteLastHeroe(): void {
    // if(this.heroesNames.length < 1) return
    this.deletedHeroe = this.heroesNames.pop()
  }
}
