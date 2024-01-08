import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { UpdateTodoDto } from '../../domain/dtos';
import { TodoRepository } from '../../domain';

export class TodosController {

  //* DI
  constructor(
      private readonly todoRepository: TodoRepository
  ) { }


  public getTodos = async( _req: Request, res: Response ) => {
     const todos =await this.todoRepository.getAll() 
     res.json(todos)
  };

  public getTodoById = async( req: Request, res: Response ) => {
     const id = +req.params.id

     try{
	 const todo =await this.todoRepository.getById(id)

	 res.json(todo) 
     }catch(err) {
	res.status(404)
     }
  };

  public createTodo = async( req: Request, res: Response ) => {
     const { text } = req.body;

     try{
	 const todo = await this.todoRepository.create({text}) 

	 res.json( todo );
     }catch(err) {
	res.status(404).json({err})
     }

  };

  public updateTodo = async( req: Request, res: Response ) => {
     const id = +req.params.id;
     const [err, updateTodoDto] = UpdateTodoDto.create({id, ...req.body})
     if (err) return res.status(400).json({err})
	
     try{
      const updatedTodo =await this.todoRepository.updateById(updateTodoDto!) 

      res.json( updatedTodo );
     }catch(err) {
	res.status(404).json({err})
     }
  }


  public deleteTodo = async(req:Request, res: Response) => {
    const id = +req.params.id;

    try{
      const delTodo = await this.todoRepository.deleteByIdf(id)
      res.json( delTodo );
    }catch(err) {
      res.status(404).json({err})
    }
  }
  


}
