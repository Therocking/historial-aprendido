import { gql, ApolloServer, UserInputError } from "apollo-server" 

let nId = 12

const pokemons = [
    {
      "name": "bulbasaur",
      "power": "fireball",
       "type": "fire",
       "id": 1
    },
    {
      "name": "ivysaur",
      "power": "fireball",
       "type": "fire",
       "id": 2
    },
    {
      "name": "venusaur",
      "power": "fireball",
       "type": "fire",
       "trainer": "aks",
       "id": 3
    },
    {
      "name": "charmander",
       "power": "fireball",
       "type": "fire",
       "trainer": "aks",
       "id": 4
    },
]

/*Func helpers*/
const findPokemon = (args) => pokemons.find(p => p.name === args.name)

// Definicion de los metodos
const typeDefs = gql`
   enum YesNo {
      YES
      NO
   }

   type Data {
      trainer: String
      id: Int!
   }

   type Pokemon {
      name: String!
      power: String!
      type: String!
      trainer: String
      id: Int!
      data: Data!
   }

   type Query {
      pokemonCount: Int!
      allPokemons(trainner: YesNo): [Pokemon]!
      findPokemon(name: String!): Pokemon
      findPokemonById(id: Int!): Pokemon
   }

   type Mutation {
      addPokemon(
	 name: String!
	 power: String!
	 type: String!
	 trainer: String
      ): Pokemon
      editTrainner(
	 pokemonName: String!
	 trainnerName: String!
      ): Pokemon
   }
`

const resolvers = {
   Query: { // Consultas
      pokemonCount: () => pokemons.length,
      allPokemons: (root, args) => {
	 if(!args.trainner) return pokemons;

	 // Ejemplo con enums
	 const byTrainner = (pokemon) => 
	    args.trainner === "YES" ? pokemon.trainer : !pokemon.trainer;

	 return pokemons.filter(byTrainner)
      },
      findPokemon: (root, args) => findPokemon(args),
      findPokemonById: (root, args) => pokemons.find(p => p.id=== args.id),
   },
   Mutation: { // Isersiones
      addPokemon: (root, args) => {
	 // Manejo de un error del usuario
	if(findPokemon(args)) {
	   throw new UserInputError("Pokemon name in use", {
	      invalidArgs: args.name 
	   })
	}
	 const pokemon = {...args, id: nId++}
	 pokemons.push(pokemon) // "update" db with new pokemon
	 return pokemon
      },
      editTrainner: (root, args) => {
	 const {pokemonName, trainnerName} = args;

	 const pokemon = findPokemon({name: pokemonName})
	 if(!pokemon) return null

	 pokemon.trainer = trainnerName
	 return pokemon
      }
   },
   Pokemon: {
      data: (root) => ({id: root.id, trainer: root.trainer}) 
   }
}

const server = new ApolloServer({
   typeDefs,
   resolvers
})

server.listen().then( ({url}) => {
   console.log(`Server listen at: ${url}`)
})
