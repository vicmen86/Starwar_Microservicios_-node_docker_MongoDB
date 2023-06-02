const {Router}= require("express")
const router =Router()
const controllers = require("../controllers")
const middlewares = require("../middlewares")

  router.get('/', controllers.getPlanets);
  router.post('/',middlewares.planetsValidation, controllers.postPlanets);
  
  
  module.exports = router;