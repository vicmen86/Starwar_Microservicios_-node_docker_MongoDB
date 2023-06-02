const axios = require("axios");
//const Characters = require("../data/index")
const { response } = require("../utils/index")


module.exports = async (req, res) => {
    const{ id } = req.params
    const result = await axios.get(`http://localhost:8004/Character/${id}`)
    response(res, 200, result.data)
}