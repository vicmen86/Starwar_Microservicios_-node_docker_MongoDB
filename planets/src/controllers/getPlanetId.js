const axios = require("axios");

const { response } = require("../utils/index")


module.exports = async (req, res) => {
    const{ id } = req.params
    const result = await axios.get(`http://localhost:8004/Planet/${id}`)
    response(res, 200, result.data)
}