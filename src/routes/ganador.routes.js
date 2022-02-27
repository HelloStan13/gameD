const { Router } = require("express");
// se crean objeto
const routersGanador = Router();
const crtGanador = require("../controllers/ganador.controller");

routersGanador.get('/', crtGanador.obtenerGanador); // consulta para obtener ganador

//se expota módulo
module.exports = routersGanador;