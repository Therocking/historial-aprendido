import { Request, Response } from 'express';
import { UpdateTodoDto } from '../../domain/dtos';
import { CreateTodo, CustomError, DeleteTodo, GetTodo, GetTodos, TodoRepository, UpdateTodo } from '../../domain';

export class TodosController {

  //* DI
  constructor(
      private readonly todoRepository: TodoRepository
  ) { }

  private handleError = (res: Response, err: unknown) => {
      if( err instanceof CustomError ) {
	 return res.status(err.statusCode).json({err: err.msg})
      } 

      res.status(500).json({error: 'Internal server error'})
  }

  public getTodos = async( _req: Request, res: Response ) => {
      new GetTodos( this.todoRepository )
      .execute()
      .then( todos => res.json({todos}) )
      .catch( err => this.handleError(res, err))
   };

  public getTodoById = async( req: Request, res: Response ) => {
     const id = +req.params.id

      new GetTodo( this.todoRepository ) 
      .execute(id)
      .then( todo => res.json({todo}) )
      .catch( err => this.handleError(res, err))  
  };

  public createTodo = async( req: Request, res: Response ) => {
     const { text } = req.body;

      new CreateTodo( this.todoRepository ) 
      .execute({ text })
      .then( todo => res.status(201).json({todo}) )
      .catch( err => this.handleError(res, err))  

  };

  public updateTodo = async( req: Request, res: Response ) => {
     const id = +req.params.id;
     const [err, updateTodoDto] = UpdateTodoDto.create({id, ...req.body})
     if (err) return res.status(400).json({err})

     new UpdateTodo( this.todoRepository )
     .execute( updateTodoDto! )
     .then( todo => res.json({todo}) )
      .catch( err => this.handleError(res, err))  
   }


  public deleteTodo = async(req:Request, res: Response) => {
    const id = +req.params.id;

    new DeleteTodo( this.todoRepository )
    .execute(id)
    .then( todo => res.json(todo) )
      .catch( err => this.handleError(res, err))  
   }
  


}
