//en index ubicamos un objeto con rutas de todos los controllers de este microservicio
//cada controllers tiene muy pocas linas de codigo y sencillo de leer y modificar
const {catchedAsync}=require("../utils")

module.exports = {
  getPlanets : catchedAsync((require("./getPlanets"))),
  // ideamos una especie de midelware manejador de errores
  getPlanetId : catchedAsync((require("./getPlanetId"))),
  postPlanets : catchedAsync((require("./postPlanets")))
}