const Juego = require("../Models/Jugador");
//se crean método para iniciar juego
exports.obtener= async(req, res) => {
  try {
    const jugadores =  await Juego.find({activo: true}); //traigo la informacion de los jugadores que entran al juego.
    const juego={
      estado:"Game in Progress ",
      idGame: "vldmvbpdlgojvmsd",
      Gamers:jugadores
          }
          res.json(juego)
     } catch (error) {
    res.status(500).json(error); 
  }
}
