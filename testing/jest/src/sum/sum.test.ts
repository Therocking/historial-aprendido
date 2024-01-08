import { sum } from "./sum"


describe('sum.ts', () => {
   
   test('Should sum two numbers', () => {
      
      expect( sum(5,5) ).toBe(10)
   })
})
