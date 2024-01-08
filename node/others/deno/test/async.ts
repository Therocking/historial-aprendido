import { delay } from "std/async/delay.ts";

Deno.test("async sum", async() => {
   const x = 1+2;

   // Away same async task
   await delay(1000);

   if(x !== 3) {
      throw Error(`x should be equals to ${x}`)
   }
});
