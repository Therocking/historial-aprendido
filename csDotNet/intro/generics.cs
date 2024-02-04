/*Genericos*/

namespace Genericts
{
public class MyList<T>
{
  private List<T> _list;
  private int _limit;

  public MyList(int limit)
  {
    _limit = limit;
    _list = new List<T>();
  }

  public void Add(T element)
  {
    if(_list.Count < _limit)
    {
      _list.Add(element);
    }
  }

  public string GetContent()
  {
    string content = "";

    // Itera sobre la lista.
    foreach (var ele in _list)
    {
      content += $"{ele}, ";
    }

    return content;
  }
}

class Beer
{
  public string Name {get; set;}
  public int Price {get; set;}
  
  // Sobreescribe el metodo `ToString` que viene de la herencia que traen por defecto todas
  // las clases del clase `object`.
  public override string ToString()
  {
    return $"Nombre: {Name}, precio: {Price}";
  }
}
}
