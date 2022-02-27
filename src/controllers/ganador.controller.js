const Juego = require("../Models/Jugador");
//se crean método para obtener jugadores y finalizar el juego con un ganador, 
//por el momento gana el jugador que apueste 6
exports.obtenerGanador= async(req, res) => {
  try {
    const ganador =  await Juego.find({apuesta:"6"}); //devuelve la informacion del jugador que gana
    const ganadoJuego={
      estado:"Finish Game",
      idGame: "vldmvbpdlgojvmsd", 
      GamerWinner:ganador
          }
          res.json(ganadoJuego)
     } catch (error) {
    res.status(500).json(error); 
  }
}
