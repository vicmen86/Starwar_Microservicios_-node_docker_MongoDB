const axios = require("axios");

const { response } = require("../utils");

module.exports = async (req, res) => {
  const newFilm = req.body;
  const film = await axios.post(
    "http://database:8004/Film",
    newFilm
  );
  response(res, 201, film.data);
};
