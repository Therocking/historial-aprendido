
namespace CircularLinkedList
{
    public class Node
    {
        public int Data {get; set;}
        public Node? Next {get; set;}

        public Node(int data)
        {
          Data = data;
        }
    }

    public class CLL
    {
       public Node? Head; 

       public void Append(int data)
       {
         var node = new Node(data);

         if(Head is null)
         {
           Head = node;
           return;
         }

         node.Next = Head;
         Head.Next = node;
       }
    }
}
