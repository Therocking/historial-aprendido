import { gql, ApolloServer, UserInputError } from "apollo-server" 
import { getAllCharacters, getCharacter, getCharacterByGender, getCharacterByStatus } from "./controllers.js";

/*
   * "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      "created": "2017-11-04T19:09:56.428Z"
   * */
const typeDef = gql`
   enum Gender {
      FEMALE 
      MALE
      GENDERLESS
      UNKNOWN
   }

   enum Status {
      ALIVE
      DEAD
      UNKNOWN
   }

  type Character {
      id: Int!
      name: String!
      status: String!
      species: String!
      type: String
      gender: String!
      image: String
      created: String!
  } 

   type Query {
      allCharacters: [Character],
      character(id: Int!): Character,
      getByGender(gender: Gender!): [Character],
      getByStatus(status: Status!): [Character]
   }
`;
/*
   * Character: Define la estructura de los datos que se enviaran desde el servidor.
   * Query: Define la consultas que se pueden realiza
*/

const existId = (id) => {
   if(!id) throw new UserInputError("El id es requerido", {
      invalidArgs: args.id 
   });
}

const resolvers = {
   Query: {
      allCharacters: async() => {
	 return await getAllCharacters() 
      },
      character: async(_root, args) => {
	existId(args.id) 

	 return await getCharacter(args)
      },
      getByGender: async(_root, args) => {
	 const genders = {
	    FEMALE: "female",
	    MALE: "male",
	    GENDERLESS: "genderless",
	    UNKNOWN: "unknown"
	 }

	 return await getCharacterByGender(genders[args.gender])
      },
      getByStatus: async(_root, args) => {
	 const status = {
	    ALIVE: "alive",
	    DEAD: "dead",
	    UNKNOWN: "unknown"
	 }

	 return await getCharacterByStatus(status[args.status])
      }
   }
}

const server = new ApolloServer({
   typeDefs: typeDef,
   resolvers
})

server.listen().then( ({url}) => {
   console.log("Server ready on", url)
})
