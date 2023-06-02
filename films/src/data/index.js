const films = require("./films.json")

module.exports = {
  list : async () =>{
    return films
  },
  //Al llegar a esta funcion de crear una pélicula en db debemos tener todos los datos necesarios, por lo cual la peticion va a pasr antes por un middleware
  create: async () =>{
    throw Error("Hay un error al crear el films")
  }
}