
let crypto
try{
	// Esta validación es para comprobar si el módulo "crypto" tiene soporte en node

 	crypto = await import('node:crypto');

}catch(err){
	console.log(err)
}

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e

/*
 * Crypto
   Es utilizado básicamente para procesos de cifrado, decifrado HMAC, etc.
 */
