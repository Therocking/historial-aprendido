import { UpdateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entity/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface updateTodoUseCase {
   execute( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>
}

export class UpdateTodo implements updateTodoUseCase {

   constructor(
      private readonly repository: TodoRepository
   ){}
   
   execute( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity> {
          return this.repository.updateById(updateTodoDto)
   }
}
