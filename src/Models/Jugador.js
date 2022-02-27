const { default: mongoose } = require("mongoose");
const { Schema, model } = require("mongoose");
//validacón para el correo 
  const validateEmail = (correo) => {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(correo);
};
//creación del esquema para entrada a base de datos
    const JugadorSchema = new Schema({  
    nombre: {  
        type: String, 
        trim: true,
        required: true
            },
    edad: {
        type: Number,
        min: [18],
        max: [90]
            },
    correo: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'El correo es requerido'],
        unique: [true, 'El correo ya fue registrado'],
        validate: {
            validator: validateEmail,
            message: 'Por favor digite un correo válido'
            }
         },
    apuesta: {  
        type: Number, 
        required: [true, 'Apuesta valida números del 1 al 6'],
        min: [2],
        max: [6],
        unique: true
            },
    
    activo: {  
        type: Boolean, 
        default: true
            }
  });
//se expota módulo
  module.exports = model ("Jugador", JugadorSchema );