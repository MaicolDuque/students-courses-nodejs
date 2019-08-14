/**
 * Controller: Chat
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */


const Chat = require("./chat.model")


 // Gets a list of Chats
function index() {
  return Chat.find().exec()
    .then(resp => {
      console.log("chats=>", resp)
      return resp
    })
    // .catch(err);
}


// Create Chat
function create(data) {
  return Chat.create(data)
    .then(resp => {
      // let newChat = {	
      //   nombre: req.body.nombre,
      //   matematicas: parseInt(req.body.matematicas),
      //   ingles: parseInt(req.body.ingles),
      //   programacion: parseInt(req.body.programacion)
      // }
            
      // res.render('calculos', {
      //   titulo: 'Calcular Promedio',
      //   Chat: newChat
      // })	
    })
    .catch(data);   
}




function cursosDisponibles(cursos){
  return cursos.filter(curso => curso.estado == 'disponible');
}

function handleError(res, code) {
  const statusCode = code || 500;
  return (err) => {
    res.status(statusCode).send(err);
  };
}

module.exports = {
  index,
  create
}