
namespace TreeForDecitions
{
   public class Node
   {
       public string Data  {get; set;}
       public Node? Left  {get; set;}
       public Node? Right {get; set;}

       public Node(string data)
       {
         Data = data;
       }
   } 

   public class TFD
   {
     private Node? _root       {get; set;}
     private Node? _actualNode {get; set;}
     private int   _result     {get; set;}

     public TFD()
     {
       _root = new Node("Start");
       _actualNode = _root;
       _result     = 0;
     }

     public void Insert(string data)
     {
       _root = InsertRec(_root, data);
     }

     public string? Iterate(int opt)
     {
       return IterateRec(_actualNode, opt);
     }

     public void Display()
     {
       Display(_root, "ROOT");
     }

     public void ShowActualData()
     {
       Console.WriteLine(_root?.Data);
     }

     private Node InsertRec(Node? node, string data)
     {
       if(node is null)
         return new Node(data);

       // Si la palabra empieza por una letra con orden desc en el alfabeto
       if(data.CompareTo(node.Data) > 0)
         node.Left = InsertRec(node.Left, data);

       // Si la palabra empieza por una letra con orden asen en el alfabeto
       if(data.CompareTo(node.Data) < 0)
         node.Right = InsertRec(node.Right, data);

       return node;
     }

     private string? IterateRec(Node? node, int opt)
     {
       if(opt == 8)
       {
         _actualNode = node;
         return node?.Data;
       }

       if(opt == 0)
          IterateRec(node?.Left, 8);

       if(opt == 1)
         IterateRec(node?.Right, 8);

       return node?.Data;
     }

     private void Display(Node? node, string order)
     {
       if(node is null)
         return;

       Console.WriteLine($"{node.Data} - {order}");
       Display(node.Left, "LEFT");
       Display(node.Right, "RIGHT");
     }
   }
}
