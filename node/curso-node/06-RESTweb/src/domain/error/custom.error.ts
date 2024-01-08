


export class CustomError extends Error {
   
   constructor(
      public readonly msg: string,
      public readonly statusCode: number,
   ){
      super(msg)
   }
}
