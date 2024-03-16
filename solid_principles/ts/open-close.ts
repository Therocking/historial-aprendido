/* Open/close
 Se refiere a que un modulo esta abierto para extencion y cerrado para modificacion. Si hay que extender la funcionalidad del modulo se tendria que crear un nuevo modulo y extender las funcionalidades del modulo que se quiere extender(por lo general se usa el polimorfismo en este princiopio).
*/

export class Vehiculo {
  public Draw() {
    console.log("Dibuja el vehiculo")
  }
}

// Si queremos extender la funcionalidad de esta clase creamos una nueva
class Carro extends Vehiculo {
  public override Draw() {
    console.log("Dibuja el carro")
  }
}

const car = new Carro();
car.Draw();
