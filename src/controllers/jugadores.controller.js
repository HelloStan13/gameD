const Jugadores = require("../Models/Jugador");
//se crean métodos para creacion de jugador, actualización y eliminación.
//agregar jugador
exports.agregar = async(req, res) =>{
 try{
    const{nombre,edad, correo, apuesta}= req.body;
    console.log(nombre);
    if(edad<=18){
        res.json({isOk: false, msj:"Usuario debe ser mayor de 18 años."});
        }if(apuesta>=7){
            res.json({isOk: false, msj:"Sr. Usuario la Apuesta valida es sobre  los números del 1 al 6, verifique su apuesta"}); 
                        }else{
            if(nombre && edad && correo && apuesta){
                const nuevoJugador = new Jugadores({nombre, edad, correo, apuesta});
            //envio a base de datos
            await nuevoJugador.save();
            //json con 2 propiedad devuelve msj y id creado del nuevo Jugador
                res.json({msj:"Registro exitoso", id:nuevoJugador._id});
            }else{
                res.status(400).json({isOk: false, msj:"Los datos son obligatorios."})
            }
        }
    }
  catch(error){
    res.status(500).json(error);  //se puede personalizar el error averiguar como

 }
}
//actualizar jugador
exports.actualizar = async(req, res) =>{
   try {
    const id= req.params.id;
    const data = req.body;
     if(id && data){
        await Jugadores.findByIdAndUpdate(id, data);
        res.json("Datos actualizados satisfactoriamente");
     }else{
        res.json({msj:"Datos insuficientes."})
    }
    
   } catch (error) {
    res.status(500).json(error);  
   }
}
//eliminar jugador de forma lógica.
exports.eliminar= async(req, res) =>{
    try {
        const id= req.params.id;
    console.log(id);
    const eliminado = await Jugadores.findByIdAndUpdate(id,{activo:false});
     res.status(200).json({msj:"Jugador eliminado de forma satisfactoria.", isOk:true});
    } catch (error) {
        res.status(500).json(error); 
    }
}