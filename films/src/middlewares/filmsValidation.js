const {ClientError}=require('../utils/errors');
//Esta funcion es un midelware, recibe parametros req, res y next
module.exports = (req, res, next) => {
  const {name} = req.body;
  if (name)return next();
  else throw new ClientError("Falta el nombre de la pelicula", 401);
}