//en index ubicamos un objeto con rutas de todos los controllers de este microservicio
//cada controllers tiene muy pocas linas de codigo y sencillo de leer y modificar
const {catchedAsync}=require("../utils")

module.exports = {
  getCharacters : catchedAsync((require("./getCharacters"))),// ideamos una especie de midelware manejador de errores
  getCharactersById : catchedAsync((require("./getCharacterById"))),// ideamos una especie de midelware manejador de errores
  postCharacters : catchedAsync((require("./postCharacters")))
}