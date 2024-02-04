
namespace SLL 
{
  public class Node
  {
     public int Data {get; set;}
     public Node? Next {get; set;}

     public Node(int data)
     {
       Data = data;
       Next = null;
     }
  }

  public class LinkedList
  {
     public Node? Head {get; set;}

     public LinkedList()
     {
       Head = null;
     }

     /*Agrega un elemento al inicio de la lista*/
     public void Prepend(int data)
     {
       // Si el valor ya existe no hace nada
       if(ExistElem(data) is true) return;

       // Crea un nuevo nodo
       var node = new Node(data);

       // Si el head esta vacio inserta el nuevo nodo al inicio
       if(Head == null)
       {
         Head = node;
         return;
       }

       // Inserta el nuevo nodo al inicio de la lista
       node.Next = Head;

       Head = node;
     }

     /*Agrega un elemento al final de la lista*/
     public void Append(int data)
     {
       // Si el elemento existe no lo agrega
       if(ExistElem(data) is true) return;

       // Crea un nuevo nodo
       var node = new Node(data);

       // Si el head esta vacio el head sera igual al nuevo node creado 
       if(Head == null)
       {
         Head = node;
         return;
       }

       // Crea una variable temporal del head
       var temp = Head;

       // Mientras en el puntero al siguiente node tenga un valor la variable temporal
       // sera igual al puntero al siguiente node
       while(temp.Next != null)
         temp = temp.Next;

       // Inserta el nodo al final de la lista
       temp.Next = node;
       return;
     }

     /*Agrega un elemento despues de otro*/
     public void AddAfter(int elem, int data)
     {
       if(!ExistElem(elem) || ExistElem(data)) return;

       var node = new Node(data);

      if(Head == null)
      {
         Head = node;
         return;
      }

      var temp = Head;
      while(temp?.Data != elem)
      {
        temp = temp?.Next;
      }

      node.Next = temp.Next;
      temp.Next = node;
    }

     /*Elimina un elemento en base a su valor en el campo Data*/
     public void Remove(int elem)
     {
       if(!ExistElem(elem) || Head is null) return;

       var temp = Head;
       while (temp?.Next?.Data != elem)
       {
         temp = temp?.Next;
       }

       var temp2 = temp.Next.Next;
       temp.Next = temp2;
     }

     /*Verifica que un elemento exista*/
     public bool ExistElem(int data)
     {
       var temp = Head;
       while(temp != null)
       {
         if(temp.Data == data) return true;
         temp = temp.Next;
       }
       return false;
     }

     /*Muestra los elementos de la lista*/
     public void Display()
     {
       var temp = Head;
       while(temp != null)
       {
         Console.Write($"{temp.Data} -> ");
         temp = temp.Next;
       }
       Console.Write("null \n");
     }

  } 
}
