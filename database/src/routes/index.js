const { Router } = require("express");
//const {Character, Film, Planet}=require("../db")  //solo valido para routers individuales
const store = require("../db");
const {validateModel }= require("../middlewares");
const router = Router();

/* router.get('/characters', async (req, res) => {
  const response = await Character.list();
  res.status(200).json(response);
})
router.get('/films', async (req, res) => {
  const response = await Film.list();
  res.status(200).json(response);
})
router.get('/planets', async (req, res) => {
  const response = await Planet.list();
  res.status(200).json(response);
}) */
//Las siguientes lineas remplaza todo lo anterior
router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).json(response);
});
//obtner un id especifico
router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

router.post("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const data = req.body;
  
  const response = await store[model].insert(data);
  res.status(200).json(response);
});

module.exports = router;
