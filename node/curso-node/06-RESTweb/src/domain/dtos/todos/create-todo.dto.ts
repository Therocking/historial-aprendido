


export class CreateTodoDto {
   private constructor(
      private readonly text: string,
   ){}

   static create(props: { [key: string]: any }): [string?, CreateTodoDto?] {
      
      const {text} = props;

      if(!text) return ["Text property is required", undefined]

      return [undefined, new CreateTodoDto(text)]
   }
}
