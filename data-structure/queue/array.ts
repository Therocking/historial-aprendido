
/*class Queue {
   items: number[];

   constructor() {
      this.items = [];
   }

   public enqueue(valor: number) {
     const ele = this.items.push(valor)

      console.log(`${ele} added to the queue`)
   }

   public dequeue() {
      const ele = this.items.shift();

      console.log(`${ele} removed to the queue`)
   }

   public peek() {
      return this.items[0]
   }

   public tail() {
      return this.items[this.items.length-1]
   }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
queue.dequeue()

console.log("Peek", queue.peek())
console.log("Tail", queue.tail())*/

class Queue {
    front: number;
   size: number;
   private rear: number;
   cap: number;
   items: any[];

   constructor(cap: number) {
      this.cap = cap;
      this.size = 0;
      this.front = this.size;
      this.rear = this.cap-1;
      this.items = new Array(this.cap);
   }

   public isFull() {
      return (this.size === this.cap)
   } 

   public isEmpty() {
      return (this.size === 0)
   }

   private msgEmpty() {
      if(this.isEmpty()) {
	 console.log("Queue empty")
	 return 
      }
   }

   public enqueue(item: number) {
      if(this.isFull()) {
	 console.log("Queue overflow")
	 return
      }

      this.rear = (this.rear + 1) % this.cap
      const itemEqueue = this.items[this.rear] = item
      this.size++
      console.log("Element enqued", itemEqueue)
   }

   public dequeue() {
     this.msgEmpty() 

      const item = this.items[this.front]
      this.front = (this.front + 1) % this.cap
      this.size--;
      console.log("Element dequeued", item )
   }

   public peek() {
     this.msgEmpty() 

      const item = this.items[this.front]
      console.log("Peek", item)
   }

   public tail() {
      this.msgEmpty()

      const item = this.items[this.rear]
      console.log("Tail", item)
   }
}

const queue = new Queue(10)
queue.enqueue(1)
queue.peek()
queue.tail()
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.peek()
queue.tail()
