const {Router}= require("express")
const router =Router()
const controllers = require("../controllers")
const middlewares = require("../middlewares")

  router.get('/', controllers.getCharacters);
  router.get('/:id', controllers.getCharactersById);
  router.post('/',middlewares.characterValidation, controllers.postCharacters);
  
  
  module.exports = router;