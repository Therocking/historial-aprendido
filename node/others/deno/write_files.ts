

// Sobreescribe el archivo
/*await Deno.writeTextFile("./hello.txt", "Hello Deno!!");
console.log("File was succesfuly writen")*/

// Append
// En vez de sobreescribir el archivo este agrega el texto
/*await Deno.writeTextFile("./hello.txt", "\nThe file will be appendes", {
   append: true
})*/

// JSON serialized
function writeJson(path: string, data: object): string {
   try{
      Deno.writeTextFile(path, JSON.stringify(data))
      return `Written to ${path}`
   }catch(e) {
      return e.message
   }
}
console.log( writeJson("hello.json", {msg: "Hola", s: {err: null} }) )
