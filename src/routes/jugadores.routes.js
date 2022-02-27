const { Router } = require("express");
// se crean objeto
const routerJugadores = Router();
const crtJ = require("../controllers/jugadores.controller");

routerJugadores.post('/', crtJ.agregar); //creacion 

routerJugadores.put('/:id', crtJ.actualizar); //modificaciones

routerJugadores.delete('/:id', crtJ.eliminar); // eliminacion logica de  jugador

//se expota módulo
module.exports = routerJugadores;