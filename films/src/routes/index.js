const {Router}= require("express")
const router =Router()
const controllers = require("../controllers")
const middlewares = require("../middlewares")

  router.get('/', controllers.getFilms);
  router.get('/:id', controllers.getFilmsId);
  router.post('/',middlewares.filmsValidation, controllers.postFilms);
  
  
  module.exports = router;