import Person, { sayHello } from "./hello.ts"; // File extention required in imports

// Server in localhost:8000
/*Deno.serve((_request: Request) => {
   return new Response(JSON.stringify({msg: "Hello World"}))
});*/

// Fetch to deno web
/*const site = await fetch("https://www.deno.com");
console.log(await site.text());*/

/*const alex: Person = {
   firstName: 'Alex',
   lastName: 'Pierce'
}
console.log( sayHello(alex) );*/

// Read files
/*const file = Deno.openSync("hello.ts");
file.readable.pipeTo(Deno.stdout.writable, {preventClose: true});*/
// Shows file content

// Http handle
/*const handle = async(_request: Request): Promise<Response> => {
   const resp = await fetch("https://api.github.com/users/denoland", {
      headers: {
      accept: "application/json",
    }
   });

   return new Response(resp.body, {
      status: resp.status,
      headers: {
      "content-type": "application/json",
    }
   });
}

Deno.serve(handle);*/
