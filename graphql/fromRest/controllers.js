
const url = "https://rickandmortyapi.com/api";

export const getAllCharacters = async() => {
   try {
	 const resp = await fetch(`${url}/character`);
	 const {results} = await resp.json();
	 const characters = results.map(c => {
	    const {id, name, status, species, type, gender, image, created} = c
	    return {id, name, status, species, type, gender, image, created}
	 })
	 
	 return characters
      }catch(err) {
	 console.log(err)
	 throw new Error("Error al obtener los personajes")
      }
}

export const getCharacter = async(info) => {
   const {id} = info
   try {
      const resp = await fetch(`${url}/character/${id}`);
      const data = await resp.json();
      const {location, episode, url: urlFetch, ...character} = data;
      return character
   }catch(err) {
      console.log(err)
      throw new Error("Error al tratar de obtener un personaje por su id")
   }
}

export const getCharacterByGender = async(gender) => {
   try {
      const resp = await fetch(`${url}/character?gender=${gender}`);
      const {results} = await resp.json();
      const characters = results.map(c => {
	 const {location, episode, url: urlFetch, ...character} = c;
	 return character
      })
      return characters
   }catch(err) {
      console.log(err)
      throw new Error("Error al tratar de obtener un personje por su genero")
   }
}

export const getCharacterByStatus = async(status) => {
   try {
      const resp = await fetch(`${url}/character?status=${status}`);
      const {results} = await resp.json();
      const characters = results.map(c => {
	 const {location, episode, url: urlFetch, ...character} = c;
	 return character
      })
      return characters
   }catch(err) {
      console.log(err)
      throw new Error("Error al tratar de obtener un personje por su estado")
   }
}
