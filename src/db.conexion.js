const mongoose = require('mongoose');

const conexionDB = async ()=>{
    try{
   const DB = await mongoose.connect('mongodb://localhost:27017/gamers');
   console.log("Conexión Exitosa", DB.connection.name);
  } catch{
      console.log(error);
  }
}
module.exports = conexionDB;