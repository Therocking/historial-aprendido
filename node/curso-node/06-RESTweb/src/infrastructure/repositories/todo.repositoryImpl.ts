import { TodoDatasource, TodoEntity, TodoInfo, TodoRepository, UpdateTodoDto } from "../../domain";



export class TodoRepositoryImp implements TodoRepository {

   constructor(
      private readonly datasource: TodoDatasource,
   ){}

   create(todoInfo: TodoInfo): Promise<TodoEntity> {
          return this.datasource.create( todoInfo )
   }

   getAll(): Promise<TodoEntity[]> {
       return this.datasource.getAll()
   }

   getById(id: number): Promise<TodoEntity> {
       return this.datasource.getById(id)
   }

   updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
       return this.datasource.updateById(updateTodoDto)
   }

   deleteByIdf(id: number): Promise<TodoEntity> {
       return this.datasource.deleteByIdf(id)
   }

}
