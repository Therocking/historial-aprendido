/*Interface*/

namespace Interfaces
{
interface ISave
{
  public void Save();
}

// La clases pueden implementar varias interces
class Beer : ISave
{
   // Implementacion del metodo de la interfaz
   public void Save()
   {
     Console.WriteLine("Se guardo en BD");
   }
}   
}
