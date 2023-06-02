// Express tiene un manejador de rrorres para funciones sincronas por defecto
const axios = require("axios");
//const Character = require("../data") //ya no es necesario trabajamos con microservicio de base de datos
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newCharacter = req.body;
  const character = await axios.post(
    "http://localhost:8004/Character",
    newCharacter
  );
  response(res, 201, character.data);
};
