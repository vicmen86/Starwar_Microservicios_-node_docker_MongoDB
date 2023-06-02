const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "Planet" },
  films: [{ type: String, ref: "Film" }],
});
//Metodos del modelo que se encarga de hacer populate() de los datos que necesitemos 

characterSchema.statics.list = async function (){
  return await this.find().populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]);
}
// obtener un archivo especifico con findOne que recibe un objet
/* characterSchema.statics.get = async function (_id){
  return await this.findOne({_id}).populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]);
} */
characterSchema.statics.get = async function (id){
  return await this.findById(id).populate("homeworld", ["_id", "name"]).populate("films", ["_id", "title"]);
}
characterSchema.statics.insert = async function (character){
  return await this.create(character)
}
module.exports = characterSchema;