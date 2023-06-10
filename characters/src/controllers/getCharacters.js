//const Characters = require("../data")//cambiamos la bd al microservicio de bd
const axios = require("axios");
//Al momento no tenemos un abase de datos propiamente dicho sino que simulamos en index la base de datos. sin mebargo la logica de este archiivo esta debidamente preparado para una base de datos real.
const { response } = require("../utils");

module.exports = async (req, res) => {
  const characters = await axios.get("http://database:8004/Character");
  response(res, 200, characters.data);
};
