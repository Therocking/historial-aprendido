import { fetching } from "./fetchingApi"



describe('fetchin to api', () => {
   
   test('should return the response of api', async() => {
      const pokemonName = 'pikachu';
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

      const pokemon = await fetching(url)

      expect(pokemon.name).toBe(pokemonName)
   })
})


describe('Errors from api. Tring an exceptions', () => {
   test('should return an error if not have an url', async() => {
      
      const url = `http://loascalhost:1010`

      try{
	 await fetching(url)
	 expect(true).toBeFalsy()
      }catch(err) {
	 expect(String(err)).toMatch(/fetch/)
      }
   })
})
