// Herencia - encapsulación
class Animal {
   public name: string
   public run(): void {
      console.log("The %s is runnig", this.name)
   }
}

// Las clases Dog y Cat son clases hijas de la clase padre Animal.
// Esas clases herendan los métodos y atributos de su padre Animal
class Dog1 extends Animal {
   public colour: string;
   public bark(): void {
      console.log("%s Wooh! Wooh! I am of colour: %s", this.name, this.colour)
   }
}

class Cat extends Animal {
   public pattern: string;
   public meow(): void {
      console.log("%s Meow! Meow! I am of colour", this.name, this.pattern)
   }
}

main1()
function main1() {
   let dog: Dog1 = new Dog1();
   dog.name = "Bull dog";// Este método viene de la clase Animal
   dog.colour = "Brown";
   dog.bark();
   dog.run(); // Este método viene de la clase Animal

   let cat: Cat = new Cat();
   cat.name = "Rag doll";
   cat.pattern = "White and slight brownish";
   cat.meow();
   cat.run();

   let animal: Animal = new Animal();
   animal.name = "Horse";
   animal.run();
}
