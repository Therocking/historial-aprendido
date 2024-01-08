
export class Node {
   public data: number;
   public next: Node | null;

   constructor(){
      this.data = 0;
      this.next = null;
   }
}

class CLL {
   public head: Node;

   private existHead(newNode: Node) {
      if(!this.head) {
	 newNode.next = newNode;
	 this.head = newNode;
	 return
      }
   }

   public print() {
      let temp = this.head;
      if(this.head) {
	 do {
	    console.log(temp.data)
	    console.log("↓")
	    temp = temp.next!  
	 }while(temp !== this.head)
	    console.log("[Points to the first]")
      }
   }

   /* Operations with circular linked list */

   /*Insertion*/

   // Insertion at the begining
   public push(data: number) {
   // Create a new node 
   const newNode = new Node();
   newNode.data = data;

   // If next of the head is null then next of the head is new node, next of the new node is head
   // and head is new node
   this.existHead(newNode)

   // Else set the next of the head points to new node
   let last = this.head;
   while(last.next !== this.head) last = last.next!;
   newNode.next = last.next;
   last.next = newNode;

   this.head = newNode;
   }

   // Insert at the end
   public insetAtTheEnd(data: number) {
      // Create a new node
      const newNode = new Node();
      // Insert the new data in the new node
      newNode.data = data;

      // If head is empty the new node is equals to head
      this.existHead(newNode)

      // Find the last node
      let last = this.head;
      while(last.next !== this.head) last = last.next!;
      // Next of the new node equals to the first node
      newNode.next =  last.next;
      // Next of last node equals to new node
      last.next = newNode;
      // Last node equals to new node
      last = newNode;
   }

   // Insertion in between
   public insertBefore(data: number, position: number) {
      const newNode = new Node();
      newNode.data = data;
      
      this.existHead(newNode)

      let temp = this.head;
      for(let i = 1; i < position; i++) {
	temp = temp.next! 
	if(i > 1 && temp === this.head) return
      }

      newNode.next = temp.next;
      temp.next = newNode;
   }
}

const cll = new CLL();
cll.push(0)
cll.insetAtTheEnd(2)
cll.insetAtTheEnd(3)
cll.print()

//console.dir(cll.head, {depth: Infinity})
