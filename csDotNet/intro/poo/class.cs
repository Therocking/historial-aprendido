/*Clases y herencia*/
namespace Classes 
{

class SaleWithTax : Sale // `:` luego la clase de la cual se heredara(la clase padre).
{
  public decimal Tax {get; set;}

  // Usando el `base` se le manda el total a la clase padre,
  // ya que su constructor lo requiere.
  public SaleWithTax(decimal total, decimal tax) : base(total)
  {
    Tax = tax;
  }

  // `override` para sobreescribir un metodo.
  public override string GetInfo()
  {
    return $"El total es {Total}. Impustos {Tax}";
  }
}

class Sale
{
    public decimal Total {get; set;}

    public Sale(decimal total) 
    {
      Total = total;
    }

    // `virtual` para permitir la sobreescritura del metodo.
    public virtual string GetInfo()
    {
      return $"El total es {Total}";
    }
}   
}

