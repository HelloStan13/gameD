const { Router } = require("express");
// se crean objeto
const routersJuego = Router();
const crtJuego = require("../controllers/juego.controller");

routersJuego.get('/', crtJuego.obtener); // consulta de datos

//se expota módulo
module.exports = routersJuego;