const express = require('express');
const morgan = require("morgan");
const conexionDB = require("./db.conexion")
const routerJugadores = require("./routes/jugadores.routes");
const routesJuego = require("./routes/juego.routes");
const routersGanador = require('./routes/ganador.routes');

const app = express();


//llammar conexión a BD
conexionDB();

//settings
app.set("name", "rest-api-nodejs");
app.set("port", process.env.port || 8080);
app.set('view engine', 'pug');

//middleware
app.use(express.json());
app.use(morgan("common")); //sirve para controlar clientes, recursos, donde y más.

//llamado de rutas
//app.use(express.static("public"));
app.use("/api/gamers", routerJugadores);
app.use("/api/stargame", routesJuego);
app.use("/api/finishGame", routersGanador);


module.exports = app;