import { UpdateTodoDto } from "../dtos"; 
import { TodoEntity } from "../entity/todo.entity";

export interface TodoInfo {
   text: string;
}

export abstract class TodoDatasource{
   
   abstract create( todoInfo: TodoInfo ): Promise<TodoEntity>

   // todo: paginación
   abstract getAll(): Promise<TodoEntity[]>
   abstract getById( id: number ): Promise<TodoEntity>
   abstract updateById( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>
   abstract deleteByIdf( id: number ): Promise<TodoEntity>
}
