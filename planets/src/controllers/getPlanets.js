const axios = require("axios");

const { response } = require("../utils/index")


module.exports = async (req, res) => {
    
    const planets = await axios.get("http://localhost:8004/Planet")
    response(res, 200, planets.data)
}