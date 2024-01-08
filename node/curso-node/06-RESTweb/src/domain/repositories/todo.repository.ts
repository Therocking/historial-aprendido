import { TodoInfo } from "../datasource/todo.datasource";
import { UpdateTodoDto } from "../dtos"; 
import { TodoEntity } from "../entity/todo.entity";


export abstract class TodoRepository{
   
   abstract create( todoInfo: TodoInfo ): Promise<TodoEntity>

   // todo: paginación
   abstract getAll(): Promise<TodoEntity[]>
   abstract getById( id: number ): Promise<TodoEntity>
   abstract updateById( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>
   abstract deleteByIdf( id: number ): Promise<TodoEntity>
}
