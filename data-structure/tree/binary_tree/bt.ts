
export class Node {
   public value: number;
   public right: Node | null;
   public left: Node | null;

   constructor(val: number) {
      this.value = val;
      this.left = this.right = null;
   }
}

class BT {
   public root: Node | null;

   constructor() {
      this.root = null;
   }

   private searchRecursively(node: Node | null, val: number): boolean {
      // Si el árbol es nulo retorna false
      if(node === null) return false;
      // Si la raiz es igual al valor que se busca retorna true
      if(node.value === val) return true;
      // Si el valor que se busca es menor a la raiz, se de forma recursiva el valor a la izquierda
      if(val < node.value) {
	 return this.searchRecursively(node.left, val)
      }
      //De lo contrario, si el valor que se busca es menor a la raiz, se de forma recursiva el valor a la derecha
      else {
	 return this.searchRecursively(node.right, val)
      }
   }

   private inserRecursively(node: Node | null, val: number): Node {
      if(node === null ) {
	 return new Node(val)
      }

      if(val < node.value) {
	 node.left = this.inserRecursively(node.left, val)
      }else if(val > node.value) {
	 node.right = this.inserRecursively(node.right, val)
      }

      return node
   }

   private deleteRecursively(node: Node | null, val: number): Node | null {
      // Encontrar el valor en el árbol
      if(node === null) return node;

      // Si el valor del nodo actual es igual al valor que se quiere eliminar retorna el valor
      if(node.value === val) {
	 node = null
	 return node
      }

      if(val < node.value) {
	 node.left = this.deleteRecursively(node.left, val);
      }else if(val > node.value) {
	 node.right = this.deleteRecursively(node.right, val);
      }

      return node
   }

   private displayInorder(node: Node | null): void {
      // Si el node es nulo, no hacer nada
      if(node === null) return;

      console.log(node.value)
      this.displayInorder(node.left)
      this.displayInorder(node.right)
   }

   private limits(node: Node | null): void {
      // Si el node es nulo, no hacer nada
      if(node === null) return;

      // Si el nodo es un hoja, la muestra por consola
      if(node.left === null && node.right === null) {
	 console.log("Node leaf:", node.value)
      }

      // Llamadas recursivas del nodo derecho e izquierdo
      this.limits(node.right)
      this.limits(node.left)
   } 

   /*Métodos*/

   // Busqueda de un valor en un árbol
   public exist(val: number): boolean {
      return this.searchRecursively(this.root, val)
   }
   
   // Insersión
   public insert(val: number): void {
      this.root = this.inserRecursively(this.root, val)
   }

   // Eliminación
   public delete(val: number): void {
      this.root = this.deleteRecursively(this.root, val)
   }

   //
   public inorder(): void {
      this.displayInorder(this.root)
   }

   // Muestras las hojas
   public showLeaves(): void {
      this.limits(this.root)
   }
}

const bt = new BT()
bt.insert(25)
bt.insert(33)
bt.insert(17)
bt.insert(45)
bt.insert(0)
bt.insert(1)
bt.insert(100)
bt.showLeaves()
//bt.inorder()
//bt.delete(20)
//console.log("Element is in the tree:", bt.exist(33))
//console.log(bt)
