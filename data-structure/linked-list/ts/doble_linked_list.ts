// Doble linked list
export class Nodes {
   public data: number;
   public next: Nodes | null;
   public prev: Nodes | null;

   constructor(data: number) {
      this.data = data;
      this.next = null;
      this.prev = null;
   }
}

class DoblyLinkedList {
   public head: Nodes | null;

   constructor() {
      this.head = null;
   }

   public addNode(data: number) {
      // 1. Allocate a new node
      // 2. Put in the data
      const newNode = new Nodes(data);

      // 3. Make next of new node as head
      newNode.next = this.head;

      // 4. Make the previous of the current head point to new node
      if(this.head !== null) {
	 this.head.prev = newNode;
      }

      // 5. Move the head to point the new node
      this.head = newNode;
   }

   public addAfter(prevNode: Nodes, data: number) {
      // 1. Create a new node
      // 2. Insert the data in the new node
      const newNode = new Nodes(data);

      // 3. Point the next of new node to next of prev node
      newNode.next = prevNode.next;

      // 4. Point the next of prev node to new node
      prevNode.next = newNode;

      // 5. Point the previous of new node to prev node
     newNode.prev = prevNode;

      // 6. Change the pointer of the new node's previous pointer to new node
     if(newNode.next !== null) {
	newNode.next.prev = newNode;
     }
   }

   public addBefore(nextNode: Nodes, data: number) {

      // Allocate memory for the new node, let it be called new_node.
      // Put the data in new_node.
      const newNode = new Nodes(data);

      if(!nextNode) {
	 this.head = newNode
	 return
      }

      // Set the previous pointer of this new_node as the previous node of the next_node.
      newNode.prev = nextNode.prev;

      // Set the previous pointer of the next_node as the new_node.
      nextNode.prev = newNode;

      // Set the next pointer of this new_node as the next_node.
      newNode.next = nextNode;

      /* Now set the previous pointer of new_node.
       If the previous node of the new_node is not NULL, then set the next pointer of this previous node as new_node.
       Else, if the prev of new_node is NULL, it will be the new head node.*/
       if(newNode.prev !== null) {
	  newNode.prev.next = newNode;
       }else this.head = newNode;
   }

   public addAtEnd(data: number) {
      // Create a new node (say new_node).
      // Put the value in the new node.
      // Make the next pointer of new_node as null.
      const newNode = new Nodes(data);

      // If the list is empty, make new_node as the head.
      if(!this.head) {
	 this.head = newNode;
	 return;
      }

      // Otherwise, travel to the end of the linked list.
      let lastNode = this.head;
      do{
	 lastNode = lastNode.next!;
      }while(lastNode.next !== null)

      // Now make the next pointer of last node point to new_node.
      // Change the previous pointer of new_node to the last node of the list.
      lastNode.next = newNode;
      newNode.prev = lastNode;
   }

   public display() {
      let currentNode = this.head!;
	 console.log("\nRepresentación de las listas doblemente enlazadas")
      do{
	 console.log("",currentNode.data)
	 console.log("↑↓")
	 currentNode = currentNode.next!
      }while(currentNode !== null)
	 console.log(currentNode, "\n")
   }
}

const dll = new DoblyLinkedList();
dll.addNode(4);
dll.addNode(3);
dll.addNode(2);
dll.addNode(1);
dll.addNode(0);
dll.display()
