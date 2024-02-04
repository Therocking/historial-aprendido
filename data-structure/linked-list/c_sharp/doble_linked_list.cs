
namespace DobleLinkedList
{
  public class Node
  {
     public int Data {get; set;}
     public Node? Next {get; set;}
     public Node? Prev {get; set;}

     public Node(int data)
     {
       Data = data;
       Next = null;
       Prev = null;
     }
  }

  public class DLL
  {
    private Node? Head;

    /*Agregar al inicio*/
    public void Append(int data)
    {
      var node = new Node(data);

      if(Head is null)
      {
        Head = node;
        return;
      }

      Head.Prev = node;
      node.Next = Head;
      Head = node;
    }

    /*Agregar al final*/
    public void Prepend(int data)
    {
      var node = new Node(data);

      if(Head is null)
      {
        Head = node;
        return;
      }

      var temp = Head;
      while (temp.Next != null)
      {
          temp = temp.Next;
      }

      node.Prev = temp;
      temp.Next = node;
    }

    /*Agregar despues de otro nodo*/
    public void AddAfter(int elem, int data)
    {
      var node = new Node(data);

      if(Head is null)
      {
        Head = node;
        return;
      }

      var temp = Head;
      while (temp?.Data != elem)
      {
          temp = temp?.Next;
      }

      node.Prev = temp;
      node.Next = temp.Next;
      temp.Next = node;
    }

    /*Agregar antes de un nodo*/
    public void AddBefore(int elem, int data)
    {
      var node = new Node(data);

      if(Head is null) 
      {
        Head = node;
        return;
      }

      var temp = Head;
      while(temp?.Data != elem)
        temp = temp?.Next;

      node.Prev = temp.Prev;
      node.Next = temp;

      temp.Prev = node;

      if(node.Prev != null)
      {
        node.Prev.Next = node;
      }else
      {
          Head = node;
      }
    }

    /*Elimina un nodo*/
    public void Remove(int elem) 
    {
      /*TODO: hacer que pueda borra nodos de las esquinas*/
      if(Head is null) return;

      var temp = Head;
      while(temp?.Data != elem)
        temp = temp?.Next;

      temp.Prev.Next = temp.Next;
      temp.Next.Prev = temp.Prev;
    }

    /*Muestra los nodos*/
    public void Display()
    {
      var temp = Head;
      Console.Write("null ");
      while (temp != null)
      {
          Console.Write($"<- ");
          Console.Write($"{temp?.Data} -> ");
          temp = temp?.Next;
      }
      Console.Write("null\n");
    }
  }
}
