/* Interface segregation
  Se refiere a que no es ideal tener una interafaz con un monton de fucionalidades que no utilizara(fat interface). 
  Este dice que se tienen que separar las interfaces en interfaces mas cortas.
*/

/*Fat interface
 interface Producto {
  Name: string
  Alcohol: number 
 }
*/

interface Producto {
  Name: string
}

// La bebida es un producto y tiene alcohol
interface Bebida extends Producto {
  Alcohol: number
}

class Laptop implements Producto {
  public Name: string = "Laptop"
}

class Cerveza implements Bebida {
  public Name: string = "Precidente"
  public Alcohol: number = 10
}
