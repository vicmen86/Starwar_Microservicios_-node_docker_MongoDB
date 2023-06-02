// Express tiene un manejador de rrorres para funciones sincronas por defecto
const Films = require("../data")
const {response} = require("../utils")

module.exports =async (req, res) => {
  const newFilms = await Films.create()
response(res, 201, newFilms)}