// Ejemplos que me gustaran sobre buenas prácticas del repo: clean-code-javascript


// Valores en un objeto por defecto
const obj = {
   nombre: 'Pedro',
   edad: 12,
   //email: null
}

function crearUsuario(obj) {
   // Evitar
   /* obj.nombre = obj.nombre || 'Jose',
      obj.edad = obj.edad || 25,
      etc..
   */

   // Mejor usar el object.assign para agregar valores a las propiedades que no existen
   return obj = Object.assign(
      { // Si no viene alguna de las propiedades, se utilizan por defecto las siguientes
	 nombre: 'Jose',
	 edad: 15,
	 email: 'jose@gmail.com'
      },
      obj
   );

}
console.log( crearUsuario(obj) )
