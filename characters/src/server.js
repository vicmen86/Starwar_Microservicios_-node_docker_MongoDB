const express = require('express');
const morgan = require('morgan');
//const router = require('./routes'); Lo remplazamos con un midelware

const server = express();

server.use(morgan("dev"))
server.use(express.json())
server.use("/characters", require("./routes"))

server.use("*",(req,res) =>{res.status(404).send("Not found")} )
//Sobrescribir el manejador de errores de express con la siguiente linea.Esta es una buena practica ya que permite encapsular informacion sencible 
server.use((err,req,res,next) =>{
  res.status(err.statusCode||500).send({
    error:true,
    message:err.message})
})

module.exports = server;