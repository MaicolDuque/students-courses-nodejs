/**
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;


const EstudianteSchema =  new Schema({
  nombre:       {type: String, required: true },
  matematicas:  {type: String},
  ingles:       {type: String},
  programacion: {type: String}
})

const Estudiante = mongoose.model('Estudiante', EstudianteSchema)

module.exports = Estudiante