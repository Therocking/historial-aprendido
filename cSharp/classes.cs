
namespace Acme.Classes;

// Clase
public class Point
{
  // Campos
  public int X { get; }
  public int Y { get; }

  // Constructor(inicializado de forma corta, como un arrow function)
  public Point(int x, int y) => (X, Y) = (x, y);
}

/*
 ** Instancionado la clase "Point" **

  var p1 = new Point(0, 0);
  var p2 = new Point(10, 20);
*/

// Genera una secuencia de numeros aleatorios
public class PointFactory(int numOfPoints)
{
  public IEnumerable<Point> CreatePoints()
  {
    var generator = new Random();
    for (int i = 0; i < numOfPoints; i++)
    {
      yield return new Point(generator.Next(), generator.Next());
    }
  }
}

/*
 ** Instanciacion **
 var factory = new PointFactory(10);
 foreach(var point int factory.CreatePoints())
 {
   Console.WriteLine($"({point.X}, {point.Y})");
 }
*/

// Parametros de tipo
public class Pair<TFirst, TSecond>
{
  public TFirst First { get; }
  public TSecond Second { get; }

  public Pair(TFirst first, TSecond second) =>
     (First, Second) = (first, second);
}

/*
 ** Instanciacion **
   var pair = new Pair<int, string>(1, "two");
   int i = pair.First;     //TFirst int
   string s = pair.Second; //TSecond string
*/

// Clase base - herencia
public class Point3D : Point
{
  public int Z { get; set; }

  public Point3D(int x, int y, int z) : base(x, y)
  {
    Z = z;
  }
}

/*
 ** Instanciacion **
 Point a = new Point(10, 20);
 Point b = new Point3D(10, 20, 30);
*/

// Struct
public struct PointS
{
  public int X { get; }
  public int Y { get; }

  public PointS(int x, int y) => (X, Y) = (x, y);
}

// Interfaces
interface IControl
{
  void Paint();
}

/*
 ** Herencia entre interfaces **

 interface ITextBox : IControl
   {
    void SetText(string text);
   }

 interface IListBox : IControl
   {
    void SetItems(string[] items);
   }

 interface IComboBox : ITextBox, IListBox { }
*/

// Herencia multiple
interface IDataBound
{
  void Bind(int b);
}

public class EditBox : IControl, IDataBound
{
  // Hereda los siguientes metodos de las interfaces: IControl e IDataBound
  public void Paint()
  {
    Console.WriteLine("Paint");
  }
  public void Bind(int b)
  {
    Console.WriteLine("Bind");
  }
}

// Enums
public enum SomeRootVegetable
{
  Radish,
  HorseRadish,
  Turnip
}

[Flags]
public enum Seansons
{
  None = 0,
  Sommer = 1,
  Autum = 2,
  Winter = 3,
  Spring = 4,
  All = Sommer | Autum | Winter | Spring,
}

/*
 ** Declaraciones de enums **
 var spring = Seansons.Spring;

 var turnip = SomeRootVegetable.Turnip;

 var startingOrEquinox = Seansons.Spring | Seasons.Autum;
 var theYear = Seasons.All;
*/

// Abstract class
public abstract class Expression
{
  public abstract double Evaluate(Dictionary<string, object> vars);
}

// Abstract class implemtation
public class Constant : Expression
{
  double _value;

  public Constant(double value)
  {
    _value = value;
  }

  public override double Evaluate(Dictionary<string, object> vars)
  {
    return _value;
  }
}

