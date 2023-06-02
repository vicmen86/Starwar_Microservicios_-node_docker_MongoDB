const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs");

const conecction = mongoose.createConnection(MONGO_URI);

/* const Character = conecction.model(
  "Character",
  require("./schemas/characterSchema")
);
const Film = conecction.model(
  "Film",
  require("./schemas/filmSchema")
);
const Planet = conecction.model(
  "Planet",
  require("./schemas/planetSchema")
);
 */ //Remplazo todo lo anterior en module exports 
 //Con la siguiente linea hacemos un modelo prueba para consultar a nuestra base de datos 
/* Character.find().populate("films", ["_id", "title", "producer"]).then(res => console.log(res[0])
  );//con pupulate puedo mostrar todos los datos que quiera ago la referencia
 */
  module.exports = {
    Character :conecction.model(
      "Character",require("./schemas/characterSchema")),
    Film :conecction.model(
      "Film",require("./schemas/filmSchema")),
    Planet :conecction.model(
      "Planet",require("./schemas/planetSchema"))
  }