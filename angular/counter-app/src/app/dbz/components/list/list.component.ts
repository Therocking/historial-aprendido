import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  // The @Input and the @Output are modules to comunicate the parent component with its childrens and vice verse.
  // Event
  @Input()
  public characterList: ICharacter[] = [
    {
      id: crypto.randomUUID(),
      name: 'Trunks',
      power: 1212
    }
  ]

  // Emit a event with a parameter(in that case the parameter is type number).
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  public removeCharacter(id: string): void {
    this.onDeleteCharacter.emit(id)
  }
}
