import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<ICharacter> = new EventEmitter()

  public character: ICharacter = {
    id: crypto.randomUUID(),
    name: '',
    power: 0
  }

  /**
   * emitCharacter
   */
  public emitCharacter() {
    this.character.id = crypto.randomUUID()

    // debugger // To debug on the browser

    if(this.character.name.length === 0) return

    this.onNewCharacter.emit(this.character)

    this.character = {id: '', name: '', power: 0}
  }

}
