const Films = require("../data")
//Al momento no tenemos un abase de datos propiamente dicho sino que simulamos en index la base de datos. sin mebargo la logica de este archiivo esta debidamente preparado para una base de datos real.
const {response}=require("../utils")

module.exports = async (req, res) => {
  const films = await Films.list()
  response(res, 200, films)
}