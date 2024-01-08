// Basic stack operations

class Stack {
   public readonly max: number;
   private top: number;
   private nodes: number[]
   constructor() {
      this.max = 100;
      this.top = -1;
      this.nodes = Array(this.max).fill(0);
   }

   public isEmpty(): boolean {
      return (this.top > 0)
   }

   public push(value: number): string {
      if(this.top >= (this.max -1)) return "Stack overflow";

      this.top += 1;
      this.nodes[this.top] = value;
      return `${value} pushed into stack`
   } 

   public pop(): string {
      if(this.top < 0) return "Stack underflow";

      const x = this.nodes[this.top];
      this.top -= 1;
      return `${x} poped of the stack`
   }

   public peek(): string {
      if(this.top < 0) return "Stack underflow";
      
      return `${this.nodes[this.top]}`
   }

   public print(): void {
      for(let i = this.top; i > -1; i--) {
	 console.log("Nodes in stack: %s", this.nodes[i])
      }
   }
}

const stack = new Stack();
const isEmpty = stack.isEmpty();
const n0 = stack.push(0);
const n1 = stack.push(1);
const n2 = stack.push(2);
const n3 = stack.push(3);
const n4 = stack.push(4);
const n5 = stack.push(5);
const nDeleted = stack.pop();

console.log("The stack is empty:", isEmpty)
console.log({n0, n1, n2, n3, n4, n5});
console.log(nDeleted)
stack.print()
