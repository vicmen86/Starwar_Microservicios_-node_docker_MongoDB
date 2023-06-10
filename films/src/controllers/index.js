//en index ubicamos un objeto con rutas de todos los controllers de este microservicio
//cada controllers tiene muy pocas linas de codigo y sencillo de leer y modificar
const {catchedAsync}=require("../utils")

module.exports = {
  getFilms : catchedAsync((require("./getFilms"))),
  // ideamos una especie de midelware manejador de errores
  getFilmsId : catchedAsync((require("./getFilmsId"))),
  postFilms : catchedAsync((require("./postFilms")))

}