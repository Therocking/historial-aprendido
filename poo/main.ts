// OOP

interface ConstructorOpts {
   name: string;
   breed: string;
   age: number;
   color: string;
}

// Class declaration
class Dog {
   // Instance variables
   private name: string;
   private breed: string;
   private age: number;
   private color: string;

   // Constructor declaration of class
   constructor(opts: ConstructorOpts) {
      const {name, breed, age, color} = opts;
      this.name = name;
      this.breed = breed;
      this.age = age;
      this.color = color;
   }

   // Method 1
   public getName(): string { return this.name }

   // Method 2
   public getBreed(): string { return this.breed }

   // Method 3
   public getAge(): number { return this.age }

   // Method 4
   public getColor(): string { return this.color }

   public toString(): string {
      return `Hi my name is ${this.getName()}.\nMy breed, age and color are ${this.getBreed()}, ${this.getAge()}, ${this.getColor()}`
   }
}

// Initialize by using method/function
class GFG {
   // sw=software
   static sw_name: string;
   static sw_price: number;

   static set(n: string, p: number) {
      this.sw_name = n;
      this.sw_price = p;
   }

   static get() {
      console.log(`Software name is: ${this.sw_name}\nSoftware price is: ${this.sw_price}`);
   }
}


main()
function main() {
   // Instanciando un objeto
   const tuffy: Dog = new Dog({name: "tuffy", breed:"papillon", age: 5, color:"white"});
   console.log(tuffy)
   console.log(tuffy.toString())

   // Static class
   GFG.set("Visual studio code", 0.0);
   GFG.get();
}
