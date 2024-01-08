// Implements abstraction with interfaces
interface Shape {
   // Abstract method for calculate the area
   calculateArea(): number;
   calculateVolume(): number;
   calculatePerimeter(): number;
}


class Circle implements Shape{
   private radius: number;

   constructor(radius: number) {
      this.radius = radius;
   }

   // Implemting the method in shape interface
   calculateArea(): number {
       return Math.PI * this.radius**2
   }

   //
   calculateVolume(): number {
     return (4/3 * (Math.PI) * Math.pow(this.radius, 3))
   }

   //
   calculatePerimeter(): number {
     return (2 * Math.PI) * this.radius
   }
}

class Square implements Shape {
   private length: number;

   constructor(length: number) {
      this.length = length
   }

   calculateVolume(): number {
     return Math.pow( this.length, 3 )
   }

   calculateArea(): number {
     return Math.pow( this.length, 2 )
   }

   calculatePerimeter(): number {
     return this.length * 4
   }
}

interface RecOpts {
   width: number;
   height: number;
   length: number;
}

class Rectangle implements Shape {
   private width: number;
   private height: number;
   private length: number;

   constructor(opts: RecOpts) {
      this.width = opts.width;
      this.height = opts.height;
      this.length = opts.length;
   }

   calculateArea(): number {
     return this.width * this.length
   }

   calculateVolume(): number {
     return this.width * this.height * this.length
   }

   calculatePerimeter(): number {
      return (this.length + this.width) * 2
   }
}

const RectangleProperties = {
   width: 20,
   height: 12,
   length: 35
}
const rectangle = new Rectangle(RectangleProperties)
const area = rectangle.calculateArea();
const volume = rectangle.calculateVolume();
const perimeter = rectangle.calculatePerimeter();
console.log("Rectangle:", {volume, area, perimeter})

const circle = new Circle(7);
const areaC = circle.calculateArea();
const volumenC = circle.calculateVolume();
const perimeterC = circle.calculatePerimeter();
console.log("Circulo:", {area: areaC, volume: volumenC, perimeter: perimeterC})

const square = new Square(5);
const areaS = square.calculateArea();
const volumenS = square.calculateVolume();
const perimeterS = square.calculatePerimeter();
console.log("Square:", {area: areaS, volume: volumenS, perimeter: perimeterS})
