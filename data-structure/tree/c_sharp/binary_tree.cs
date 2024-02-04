
namespace BinaryTree
{
   public class Node 
   {
      public int Data {get; set;}
      public Node? Right {get; set;}
      public Node? Left {get; set;}

      public Node(int data)
      {
        Data = data;
      }
   } 

   public class BT
   {
     public Node? Root {get; set;}   

     public void Insert(int data)
     {
       Root = InsertRecursively(Root, data);
     }

     public bool Search(int data)
     {
       return SearchRecursively(Root, data);
     }

     public void Delete(int data)
     {
      Root = Delete(Root, data);
     }

     public void Leaves()
     {
       ShowLeaves(Root);
     }
      
     public void Display()
     {
       Display(Root, "ROOT");
     }

     private Node InsertRecursively(Node? node, int data)
     {

       if(node is null)
        return new Node(data); 

       if(data < node.Data)
         node.Left = InsertRecursively(node.Left, data);

       if(data > node.Data)
         node.Right = InsertRecursively(node.Right, data);

       return node;
     }

     private bool SearchRecursively(Node? node, int data)
     {
       if(node is null)
         return false;

       if(node.Data == data)
         return true;

       if(data < node.Data)
         return SearchRecursively(node.Left, data);

       else
         return SearchRecursively(node.Right, data);
     }

     private Node? Delete(Node? node, int data)
     {
       if(node is null)
         return node;

       if(node.Data == data)
       {
         node = null;
         return node;
       }

       if(data < node.Data)
         node.Left = Delete(node.Left, data);

       if(data > node.Data)
         node.Right = Delete(node.Right, data);

       return node;
     }

     private void ShowLeaves(Node? node)
     {
       if(node is null)
       {
         Console.Write("Not nodes");
         return;
       }

       if(node.Left is null || node.Right is null)
       {
         Console.Write($"{node.Data} - Leaf ");
         return;
       }

       ShowLeaves(node.Left);
       ShowLeaves(node.Right);
     }

     private void Display(Node? node, string Order)
     {
       if(node is null)
         return;

       Console.WriteLine($"{node.Data} - {Order}");
       Display(node?.Left, "LEFt");
       Display(node?.Right, "RIGHT");
     }
   }
}
