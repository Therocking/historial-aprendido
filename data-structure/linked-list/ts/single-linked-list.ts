console.time()
// Single linked list class
//let head; // Head of list


class NodeOfLinkedList {
public data: number;
   public next: NodeOfLinkedList | null | undefined;

   // Constructor to create new node
   constructor(data: number) {
      this.data= data;
      this.next = null;
      //this.prev = null;
   }

}

type Head = NodeOfLinkedList | null | undefined;

//* Insert into linked list

/*
   * This function make a "relation" between nodes, in which the next var of NodeOfLinkedList will point the value of head and the value of head will change to new NodeOfLinkedList obj.
   
   * If the value of the next var is null( or in this case undefined ), that means that the head is the tail of the list.
*/
function prepend(head: Head, newData: number) { // Add a new node at the begining

   //  Allocate the node and put the data
   let newNodeOfLinkedList = new NodeOfLinkedList(newData);

   //  Make the next of new node as head
   newNodeOfLinkedList.next = head;

   //  Move the to point to new node
   head = newNodeOfLinkedList;

   return head;
}

function append(head: Head, newData: number) { // add a new node at the end
   // Allocatea the node, put the data and set next as null
   let newNodeOfLinkedList = new NodeOfLinkedList(newData);

   // If the linked list is empty, then make the new node as head
   if(!head) {
      head = newNodeOfLinkedList;
      return;
   }

   // Else the new node going to be the last node, so make of it as null
   newNodeOfLinkedList.next = null;

   // Traverse till the last node
   let last = head;
   while(last.next != null) 
   last = last.next;

   // Change the next of the last node
   last.next = newNodeOfLinkedList;
   return head;
}


//* Deletion
function deleteN(head: Head, position: number) { // Delete by position of node
   let temp = head;
   let prev = head;

   for(let i = 0; i < position; i++) {
      if(i === 0 && position === 1) {
	 head = head?.next;
	 temp = null
      }else {
	 if(i === position - 1) {
	    prev!.next = temp!.next;
	    temp = null;
	 }else {
	    prev = temp;

	    if(prev === null) break;

	    temp = temp!.next
	 }
      }
   }

   return head;
}

function deleteNodeOfLinkedList(head: Head, val: number) { // Delete by the value of node
   // Check if the list is empty
   if(!head) {
      console.log('Element no prensent in the list')
      return -1
   }

   // If the current node is the node to be deleted
   if(head.data === val) {

      // If it's start of the node head
      // node points to second node
      if(head.next) {
	 head.data = head.next.data;
	 head.next = head.next.next;
	 return 1;
      }else return 0;   
   }
   
   if(deleteNodeOfLinkedList(head.next, val) === 0) { // Recursively
	 head.next = null;
	 return 1;
      }
}

function printList(head: Head) { // Print the nodes with a row to the next node
   do{
      if(head!.next === null) {
	 console.log(`[${head!.data}] [${head}]->(nil)`);
      }else console.log(`[${head!.data}] [${head}]->${head!.next}`);
      head = head!.next;
   }while(head)
   console.log('\n');
}

// Utility function to print
// the linked list (recursive
// method)
function printLL(head: Head) { // Print the value of the node
   if(!head) return;
   let temp = head;
   do{
      console.log(temp.data);
      temp = temp.next
   }while(temp)
}

/*list*/
let list: Head = new NodeOfLinkedList(1);

/*Add*/
list = append(list, 2)
list = append(list, 3)
list = prepend(list, 4)

/*Delete*/
//deleteN(list, 3)
deleteNodeOfLinkedList(list, 10)

/*Prints*/
//printList(list)
//printLL(list)

console.dir(list, {depth: Infinity})
console.timeEnd()
