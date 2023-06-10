const axios = require("axios");

const { response } = require("../utils");

module.exports = async (req, res) => {
  const films = await axios.get("http://localhost:8004/Film");
  response(res, 200, films.data);
};
