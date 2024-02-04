using System.Text.Json;

/**/
decimal total = 15, tax = 1.5m;

var sale = new Classes.SaleWithTax(total, tax);
var msg = sale.GetInfo();

Console.WriteLine(msg);


/**/
var beer = new Interfaces.Beer();
 Some(beer);

void Some(Interfaces.ISave save)
{
  save.Save();
}

/**/
// Con los genericos puedes trabajar con diferentes tipo de datos usando la misma clase.
var nums = new Genericts.MyList<int>(3);
var strs = new Genericts.MyList<string>(3);
var beers = new Genericts.MyList<Genericts.Beer>(2);

nums.Add(1);
nums.Add(2);

strs.Add("Jose");
strs.Add("Pedro");
strs.Add("James");

Console.WriteLine( nums.GetContent() );
Console.WriteLine( strs.GetContent() );
Console.WriteLine( beers.GetContent() );
    // Llama al `ToString` de la clase beer y muestra el msg.
beers.Add(new Genericts.Beer()
{
  Name = "Corona",
  Price = 1
});

/**/
var jose = new Jsons.People()
{
  Name = "Jose",
  Age = 18
};

// Convertir a json.
var toJson = JsonSerializer.Serialize(jose);
Console.WriteLine(toJson);

// Convertir de json a su formato original.
var fromJson = JsonSerializer.Deserialize<Jsons.People>(toJson);
Console.WriteLine($"Name: {fromJson?.Name}, Age: {fromJson?.Age}");

/*Programcion funcional*/
// En la programacion funcional las funciones tienen una entrada y una salida, y no modifican
// elementos externo retornado siempre el mismo tipos de valor.

/*
// Ejemplo: si tienes una funcion que suma dos o mas parametros de tu funcion,
// siempre retornara la suma de esos parametros.
int Sumar(int a, int b)
{
  return a + b;
}

// Funcion de primera clase - tener una funcion en una variable.
var show = Show;
Some(show, "Funcion como parametro.");

Console.WriteLine(show("Esta es la funcion en la variable."));

string Show(string msg)
{
  return msg.ToUpper();
}

// `Action<tipo>` para pasar una funcion sin retorno a otra funcion como parametro.
// void Some(Action<string> fn, string msg)
// {
//   Console.WriteLine("Inicio");
//   fn(msg);
//   Console.WriteLine("Llama la funcion");
// }

// `Func<tipo de entrada, tipo de salida>` para pasar una funcion sin 
// retorno a otra funcion como parametro.
void Some(Func<string, string> fn, string msg)
{
  Console.WriteLine("Inicio");
  Console.WriteLine(fn(msg));
  Console.WriteLine("Llama la funcion");
}
*/

/*Expreciones lambda*/
// Son como las arrow funcions.
/*
Func<int, int, int> sum = (a, b) => a + b;
Console.WriteLine(sum(1, 4));

// Lambda como parametro.
Mul((a,b)=>a*b, 5);

void Mul(Func<int, int, int> fn, int num)
{
  var result = fn(num, num);
  Console.WriteLine($"Resultado de la lambda: {result}");
}*/

/*LINQ*/
// Origen de dato.
string[] names =
  {
    "Jose", "pedro", "Anna", "finn"
  };

// Consulta -> es como una consulta SQL.
var con = from n in names
            orderby n
            select n;

//
foreach (var name in con)
{
 Console.WriteLine(name); 
}
