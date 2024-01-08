// Abstract concept

// Example 1:
abstract class Shape {
   color: string

   // Abstract methods
   abstract area(): number;
   public abstract toString(): string;

   // Constructor in abstract class
   constructor(color: string) {
      this.color = color;
   }

   // Concrete method
   public getColor() {return this.color}
}

class Circle extends Shape {
   radius: number;

   constructor(color: string, radius: number) {
      super(color); // Super calls the constructor in parent class
      this.radius = radius;
   }

   // Methods inharates of the class Shape
   area(): number {
     return Math.PI * Math.pow(this.radius, 2)
   }

   public toString(): string {
     return `Circle color is: ${super.getColor()} and area is: ${this.area()}`;
   }
}

class Rectangle extends Shape {
   length: number;
   width: number;

   constructor(length: number, width: number, color: string) {
      super(color); // Super calls the constructor in parent class
      this.length = length;
      this.width = width;
   }

   area(): number {
     return this.length * this.width;
   }

   public toString(): string {
     return `Rectangle color is ${super.getColor()} and area is: ${this.area()}`
   }
}

const circle = new Circle("Red", 3.14);
const rectangle = new Rectangle(12, 7.2, "Blue");

// Example 2
abstract class Animal {
   private name: string;

   constructor(name: string) {
      this.name = name;
   }

   public abstract makeSound(): void;

   public getName() {
      return this.name;
   }
}

export class Dog extends Animal{
   constructor(name: string) { super(name) }

   public makeSound(): void {
     console.log(`${this.getName()} barks`)
   }
}

export class Cat extends Animal{
   constructor(name: string) { super(name) }

   public makeSound(): void {
     console.log(`${this.getName()} meows`)
   }
}

const dog = new Dog("Terry");
const cat = new Cat("Fluffy")

dog.makeSound()
cat.makeSound()
