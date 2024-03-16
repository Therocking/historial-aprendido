/* Single responsability
 
 Este principio se refiere a que un modulo solo existe para realizar una unica tarea. Si un modulo realiza muchas tareas ocasionria efectos secundarios al tratar de utilizarla y seria mas dificil de testear.
 */

class Vehiculo {
  public Marca: string
  public Ruedas: number

  // Este metodo estaria realizando dos acciones manejar y guardar en la bd.
  // Lo correcto seria crear otro metodo para el guardado en la bd.
  public static Manejar (): void {
    console.log("Maneja")

    // Guardar en una bd
  }
}
