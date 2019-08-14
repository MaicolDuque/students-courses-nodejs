/**
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useCreateIndex', true);  
const {Schema} = mongoose;


const UsuarioSchema = new Schema({
  documento: {type:String, unique: true},
  nombre:    String,
  correo:    String,
  telefono:  String,
<<<<<<< HEAD
  rol:       String,
  avatar:    Buffer
=======
  rol:       String
>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
})

UsuarioSchema.plugin(uniqueValidator, { message: 'Error, el campo {PATH} debe ser único.' });
const Usuario = mongoose.model('Usuario', UsuarioSchema)

module.exports = Usuario