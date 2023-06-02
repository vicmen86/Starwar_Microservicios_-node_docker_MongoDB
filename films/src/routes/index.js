const {Router}= require("express")
const router =Router()
const controllers = require("../controllers")
const middlewares = require("../middlewares")

  router.get('/', controllers.getFilms);
  router.post('/',middlewares.filmsValidation, controllers.postFilms);
  
  
  module.exports = router;