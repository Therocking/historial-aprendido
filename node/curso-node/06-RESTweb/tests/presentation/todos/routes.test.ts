import request from 'supertest';
import { testServer } from '../../test-server';
import { prisma } from '../../../src/data/postgres';

describe('todo/routes.ts /api/todo', () => {

   beforeAll( async() => {
      await testServer.start()

      await prisma.todo.deleteMany()
   })

   afterAll(() => {
      testServer.closeServer()
   })

   const todos = [
      {text: "Hola test 1"},
      {text: "Hola test 2"},
   ]
   
   test('should return TODOs /api/todo', async() => {

      await prisma.todo.createMany({
	 data: todos
      })
      
      const {body} = await request( testServer.app )
      .get('/api/todos')
      .expect(200)

      const { todos:todosDB } = body

      expect(todosDB.length).toBe(2)
      expect(todosDB[0].completedAt).toBeNull()
   })

   test('should create a TODO', async() => {
       await request( testServer.app )
      .post('/api/todos')
      .send({text: 'Todo test'})
      .set('Accept', 'application/json')
      .expect(201)
   })

   test('should return TODO by id', async() => {
      const todo = await prisma.todo.create({
	 data: {text: 'get id'}
      })

      const resp = await request(testServer.app)
      .get(`/api/todos/${todo.id}`)
      .expect(200)

      expect(resp.body.todo.completedAt).toBe(todo.completedAt)
   })
   
   test('should update a TODO', async() => {
      const todo = await prisma.todo.create({
	 data: {text: 'test'}
      });

      const {body} = await request(testServer.app)
      .put(`/api/todos/${todo.id}`)
      .send({text: 'updated'})
      .expect(200)

      expect(body.todo).not.toEqual(todo)
   })

test('should update only the TODO date', async() => {

   const text = 'test'
      const todo = await prisma.todo.create({
	 data: {text}
      });

      const date = '2023-10-12'
      const {body} = await request(testServer.app)
      .put(`/api/todos/${todo.id}`)
      .send({completedAt: date})
      .expect(200)

      expect(body.todo).not.toEqual(todo)
      expect(body.todo).toEqual({ id: expect.any(Number), text , completedAt: '2023-10-12T00:00:00.000Z' })
   })

   test('should delete a TODO', async() => {
      const todo = await prisma.todo.create({
	 data: {text: 'todo'}
      })
      
      await request(testServer.app)
      .delete(`/api/todos/${todo.id}`)
      .expect(200)
   })
})

describe('failures todo/routes.ts /api/todo', () => {
   
   const todoId = 999

   test('should return ERROR not found if todo no exist', async() => {
   const {body} = await request(testServer.app)
   .get(`/api/todos/${todoId}`)
   .expect(404)

   expect(body).toEqual({ err: `Todo with id: ${todoId}, not found` }) 
  
})

test('should return ERROR not found if todo no exist to update', async() => {
   const {body} = await request(testServer.app)
   .put(`/api/todos/${todoId}`)
   .expect(404)

   expect(body).toEqual({ err: `Todo with id: ${todoId}, not found` }) 
})
})
