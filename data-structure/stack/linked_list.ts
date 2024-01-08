// Stack implementation using linked list
/*class StackNodes {
   public data: number;
   public next: StackNodes | null;

   constructor(data: number) {
      this.data = data;
      this.next = null;
   }
}

let root: StackNodes | null = null;

function isEmpty() {
   const stackLIsEmpty: boolean = (root===null);
   console.log("The stackL is empty:", stackIsEmpty)
}

function push(value: number) {
   const newNodes: StackNode = new StackNode(value);

   if(root === null) {
      root = newNodes
   }else {
      const temp = root
      root = newNodes
      newNodes.next = temp
   }
      console.log(value, "pushed into stackL")
}

function pop() {
   let popped = Number.MIN_VALUE
   if(root === null) {
      console.log("Stack is empty")
   }else{
      popped = root.data;
      root = root.next;
   }
   return popped
}

function peek() {
   if(root === null) {
      console.log("Stack is empty")
   }else {
      console.log("Peek in stackL: ", root.data)
   }
}

function display() {
   let temp = root;
   console.log("\nElements in stackL:")
   do {
      console.log(temp!.data)
      temp = temp!.next;
   }while(temp!.next != null);
}*/

// Stack implemetation using single linked list
class Nodes {
   public data: number;
   public next: Nodes | null;

   constructor() {
      this.data = 0;
      this.next = null;
   }
}

class StackLinkedList {
   private top: Nodes | null;

   constructor() {
      this.top = null;
   }

   public isEmpty() {
      console.log("The stack is empty: ", this.top === null);
   }

   push(value: number) {
      const newNodes: Nodes = new Nodes()

      // Assign value to propertie data in node
      newNodes.data = value;

      // If top is empty, then the top pointer is the new node
      if(this.top === null) {
	 this.top = newNodes;
	 return
      }

      // Link the new node with the top
      newNodes.next = this.top;

      // Update the top pointer to the new node
      this.top = newNodes;

      console.log(value, "pushed into stack")
   }

   pop() {
      if(this.top === null) {
	 console.log("Stack underflow")
	 return
      }

      console.log(this.top!.data, "popped into stack")
      this.top = this.top.next
   }

   public peek() {
      if(this.top === null) {
	 console.log("Stack underflow")
	 return
      }

      console.log("Top in stack: ", this.top.data);
   }

   public display() {
     let temp = this.top;

      console.log("\nElements in stack")
      while (temp != null) {
	 console.log(temp.data)
	 console.log("↓")
  
         // assign temp link to temp
         temp = temp.next;
      }
      console.log(temp, "\n")
   }
}

const stackL: StackLinkedList = new StackLinkedList();
stackL.isEmpty();
stackL.push(0);
stackL.push(1);
stackL.push(2);
stackL.peek();
stackL.pop();
stackL.display()
console.log(stackL)
