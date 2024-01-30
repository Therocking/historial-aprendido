using System;

// Contexto de la clase
namespace CSharpHello
{
   class Hello
   {
      static void Main(string[] args)
      {
	 Console.WriteLine("Hello, C#!");

	 // String
	 string myString = "Esto es una cadena de texto.";
	 Console.WriteLine(myString);

	 // Int
	 int myInt = 89;
	 Console.WriteLine(myInt);

	 // Boolean
	 bool myBool = true;
	 Console.WriteLine(myBool);

	 // Double 
	 double myDouble = 8.8;
	 Console.WriteLine(myDouble);

	 // Float
	 float myFloat = 9.3f;
	 Console.WriteLine(myFloat);

	 // Var
	 var myVar = "Infiere el valor de la variable";
	 Console.WriteLine(myVar);

	 // Const
	 const int myConst = 0;
	 Console.WriteLine(myConst);

	 /*Statements*/

	 // Array
	 var array = new string[2] { "jose", "alfred" };
	 array[0] = "Pedro";
	 Console.WriteLine(array[0]);

	 // Dictionary
	 var dictionary = new Dictionary<string, int>
	 {
	    {"Jose", 18},
	    {"Pedro", 52}
	 };
	 Console.WriteLine("Edad de Jose: " + dictionary["Jose"]);

	 // Set
	 var set = new HashSet<string> {"Jose", "Marlon", "Jose"};
	 Console.WriteLine(set);

	 // Tuple
	 (string name, int age) tuple = ("Jose", 18);
	 Console.WriteLine(tuple);

	 /*Loops*/

	 // For
	 for(int i = 0; i < 2; i++) 
	 {
	    Console.WriteLine(array[i]);
	 }

	 // Foreach
	 foreach(var item in dictionary) 
	 {
	    Console.WriteLine(item);
	 }

	 foreach(var item in set) 
	 {
	    Console.WriteLine(item);
	 }

	 /*Flows statemets*/

	 // If - elseIf - else
	 if(myBool)
	 {
	    Console.WriteLine("Es true");
	 }
	 else if(myInt == 89) 
	 {
	    Console.WriteLine("Es igual a 10");
	 }
	 else
	 {
	    Console.WriteLine("Es false");
	 }

	 // Funcs
	 Console.WriteLine( MyFunc("jose"));

	 // Classes
	 var myClass = new MyClass("Peter");
	 Console.WriteLine(myClass.myName);
	 myClass.Boxin();

	 /*Reference class in other file*/
	 Console.WriteLine("Stack in diferent file");
	 // Hace referencia al ensablador en "ejem_poo", sin necesidad de referenciar el
	 // archivo en que se encuentra.
	 var stack = new Acme.Colletions.Stack<int>();
	 stack.Push(1);
	 stack.Push(2);
	 stack.Push(3);
	 Console.WriteLine(stack.Pop());
	 Console.WriteLine(stack.Pop());
	 Console.WriteLine(stack.Pop());
	 //Console.WriteLine(stack.Pop());

	 // Random points
	 var factory = new Acme.Classes.PointFactory(10);
	 foreach(var point in factory.CreatePoints())
	 {
	    Console.WriteLine($"({point.X}, {point.Y})");
	 }

	 // Herencia de clase
	 Acme.Classes.Point a = new Acme.Classes.Point3D(10, 20, 30);
	 Console.WriteLine($"clase Point3D {a.Y}");

	 // Struct
	 var b = new Acme.Classes.PointS(10, 20);
	 Console.WriteLine($"Struct {b.X}");

	 // Tipos que aceptan valores NULL
	 int? num = default;
	 num = 3;
	 Console.WriteLine($"Tipos que aceptan null: {num}");

      }
	 /*Funtion*/
	 static string MyFunc(string name)
	 {
	    return "Hola " + name;
	 }

	 /*Class*/
	 class MyClass
	 {
	    public string myName;

	    // Constructor
	    public MyClass(string name) 
	    {
	       myName = name;
	    }

	    public void Boxin() {
	       // Todos los tipos se derivan de la clase ```object```. Aqui un valor ```int```
	       // se pasa a ```object``` y luego se devuelve a su valor original ```int```.
	       int val = 4;
	       object o = val; // Boxing
	       int j = (int)o; // Unboxing
	       Console.WriteLine(j);
	    }
	 }
   }
}

