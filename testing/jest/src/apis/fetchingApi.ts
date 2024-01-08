


export const fetching = async(url: string) => {

   try{
   const resp = await fetch(url)
   return await resp.json()
   }catch(err) {
      throw err
   }
}
