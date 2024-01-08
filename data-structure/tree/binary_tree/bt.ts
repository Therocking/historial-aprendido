
class BT {
   private value: number;
   public right: BT | null;
   public left: BT | null;

   constructor(val: number) {
      this.value = val;
      this.right = null;
      this.left = null;
   }

   // Busqueda de un valor en un árbol
   public exist(t: BT | null, val: number): boolean {
      // Si el árbol es nulo retorna false
      if(t === null) return false;
      // Si la raiz es igual al valor que se busca retorna true
      if(t.value === val) return true;
      // Si el valor que se busca es menor a la raiz, se de forma recursiva el valor a la izquierda
      if(val < t.value) 
	 return this.exist(t.left, val)
      // De lo contrario, si el valor que se busca es menor a la raiz, se de forma recursiva el valor a la derecha
      else return this.exist(t.right, val);
   }

   //
   /*public insert(t: BT | null, val: number) {
      if(t === null) {
	 const temp = new BT(val);
	 t = temp
	 return t
      } else if(val < t.value) {
	 this.insert(t.left, val)
      }else this.insert(t.right, val)
   }*/
}

const root = new BT(5);
console.log("Operación de búsqueda", root.exist(root, 20))
