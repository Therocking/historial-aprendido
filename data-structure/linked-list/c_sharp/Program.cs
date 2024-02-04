// using SLL;
// using DobleLinkedList;
using CircularLinkedList;

/*Single linked list*/
// var sllInt = new LinkedList();
// sllInt.Prepend(1);
// sllInt.Append(0);
// sllInt.AddAfter(1, 2);
// sllInt.Remove(1);
// sllInt.ExistElem(1);
// sllInt.Display();

/*Doble linked list*/
// var dll = new DLL();
// dll.Append(1);
// dll.Append(2);
// dll.Prepend(8);
// dll.AddAfter(8, 9);
// dll.AddBefore(1, 0);
// dll.Remove(1);
// dll.Display();

/*Circular linked list*/
var cll = new CLL();
cll.Append(2);
Console.WriteLine(cll.Head.Next.Data);
