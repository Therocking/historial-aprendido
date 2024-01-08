import { TodoInfo } from "../../datasource/todo.datasource";
import { TodoEntity } from "../../entity/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface CreateTodoUseCase {
   execute( todoInfo: TodoInfo ): Promise<TodoEntity>
}

export class CreateTodo implements CreateTodoUseCase {

   constructor(
      private readonly repository: TodoRepository
   ){}
   
   execute(todoInfo: TodoInfo): Promise<TodoEntity> {
          return this.repository.create(todoInfo)
   }
}
