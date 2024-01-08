


export class TodoEntity {
   
   constructor(
      public id: number,
      public text: string,
      public completedAt?: Date | null
   ){}

   get isCompleted() {
      return  !!this.completedAt;
   }

   public static fromObj( obj: {[key: string]: any} ): TodoEntity {
      const { text, id, completedAt } = obj;

      if( !id ) throw 'Id is required'
      if( !text ) throw 'Text is required'

      let newCompltedAt;
      if( completedAt ) {
	 newCompltedAt = new Date(completedAt)
	 if( isNaN(newCompltedAt.getTime()) ) throw 'Invalid date'
      }

      return new TodoEntity(id, text, completedAt)
   }

}
