const server = require("./src/server");

//Lo siguiente son ejemplos y prubas para ver los datos que muetra los distintos metodos del schema

/* const {Character, Film}=require("./src/db")

//Character.list().then(res => console.log(res))
//Film.list().then(res => console.log(res))
Character.get(1).then(res => console.log(res))

Character.insert({
  _id: "201",
  name:"Jorge copia",
  birth_year: "1991"
}).then(res => console.log(res)) */

server.listen(8004, () => {
  console.log("Database listening on port 8004");
})