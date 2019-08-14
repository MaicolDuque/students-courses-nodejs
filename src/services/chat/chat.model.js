/**
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;


const ChatSchema =  new Schema({
  documento:    {type:String},
  nombre:       {type: String},
  mensaje:      {type: String},
  fecha :       { type : Date, default: Date.now }
})

const Chat = mongoose.model('Chat', ChatSchema)

module.exports = Chat