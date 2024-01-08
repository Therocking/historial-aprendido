import { prisma } from "../../data/postgres";
import { CustomError, TodoDatasource, TodoEntity, TodoInfo, UpdateTodoDto } from "../../domain";



export class TodoDatasourceImp implements TodoDatasource{
  
   async create( todoInfo: TodoInfo ): Promise<TodoEntity> {
      const todo = await prisma.todo.create({
	 data: { text: todoInfo.text } 
      });


      return TodoEntity.fromObj(todo)
   }

   async getAll(): Promise<TodoEntity[]> {
       const todo = await prisma.todo.findMany()

      return todo.map( todo => TodoEntity.fromObj(todo) )            
   }

   async getById(id: number): Promise<TodoEntity> {
       const todo = await prisma.todo.findFirst({
	 where: {id}
       })

       if( !todo ) throw new CustomError(`Todo with id: ${id}, not found`, 404)
       return TodoEntity.fromObj(todo)
   }

   async updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
      await this.getById(updateTodoDto.id)
      const todoUpdated = await prisma.todo.update({
	 where:{ id: updateTodoDto.id },
	 data: updateTodoDto.values
      })

      return TodoEntity.fromObj( todoUpdated )
   }

   async deleteByIdf(id: number): Promise<TodoEntity> {
       await this.getById(id);

      const todoDel = await prisma.todo.delete({
	 where: { id }
       });

       return TodoEntity.fromObj(todoDel)
   }
}
