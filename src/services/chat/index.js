/**
 * Routes: Estudiante
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const controller = require("./chat.controller");


module.exports = (io) => {
  
  io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
      // socket.emit('messages', messages);
      controller.index().then( res => {
        io.emit("cliente-conect", 
          res
        )
      });      
      
      //Recibir mensaje de usuario y enviarlo a todos
      socket.on("send-message", (data) => {
        controller.create(data);
        io.emit("new-message-client", data);
      });
      
      
  });
  
}
