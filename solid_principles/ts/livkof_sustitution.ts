/* Livkov sustitution
Se refiere a que las clases hijas no pueden heredar de clases las cuales no utilizaran todas sus metodos.
*/

/*
interface Animal {
  Correr(): void
  Saltar(): void
}

class Elefante implements Animal {
  public Correr() {
    console.log("El elefante corre")
  }

  // No la implementa por que el elefante no puede salta, por lo tanto esta clase no necesita utilizar esta abstraccion.
  public Saltar() {
    throw new Error("No implementada")
  }
}
*/

// Lo correcto seria crear una interfaz que tenga el metodo que si utilizara
 interface Animal {
  Correr(): void
}

// Y si se crea otro animal pero este si puede saltar se crea un interfaz para el.
interface PuedeSaltar extends Animal {
  Saltar(): void
}

class Elefante implements Animal {
  public Correr() {
    console.log("El elefante corre")
  }
}

// Si hay otro animal que salta y corre hereda la dos interfaces
class Perro implements Animal {
  public Saltar(): void {
     console.log("El perro salta") 
  }

  public Correr(): void {
      console.log("El perror salta")
  }
}

// Este principio se refiere a que los hijos deben implementar de la clase correcta.
// La poo trata de reprensentar la vida real con clases pero lo cierto es que no todo estan simple como se puede creer, ya que no todos los animales saltan o corren, otros pueden danar y volar o correr y volar. Lo ideal seria crear la abstraccion correcta para cada clase.
