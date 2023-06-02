const planets = require("./planets.json")

module.exports = {
  list : async () =>{
    return planets
  },
  //Al llegar a esta funcion de crear un personaje en db debemos tener todos los datos necesarios, por lo cual la peticion va a pasr antes por un middleware
  create: async () =>{
    throw Error("Hay un error al crear el planeta")
  }
}