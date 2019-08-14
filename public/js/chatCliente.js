
var socket = io.connect('http://localhost:8080', { 'forceNew': true });


//Treaer mensajes de la base de datos
socket.on("cliente-conect", (data) => {
  console.log("DATA->",data[0].nombre)
  data.map((msg, i) => {
    console.log(msg)
    $("#areaMensajeChat").append(`<div class="message-show"><strong>${msg.nombre}: </strong>${msg.mensaje}</div>`)
  })
})


//Escuchar y agregar nuevo mensaje enviado por mí o de otro usuario
socket.on("new-message-client", (data) => {
  $("#areaMensajeChat").append(`<div class="message-show"><strong>${data.nombre}: </strong>${data.mensaje}</div>`)
})


$( document ).ready(function() {    
  let infoUser = $("#infoUser").text();  
  let session = localStorage.getItem("session")
  if(session === ""){
    localStorage.setItem("session", infoUser);
  }  
  
  $("#sendMessage").click(()=> {
    let getInfo = JSON.parse(localStorage.getItem("session"));
    let msg = $("#fieldMessage").val();
    socket.emit("send-message", {documento: getInfo.documento, nombre: getInfo.nombre, mensaje: msg });  
    $("#fieldMessage").val(""); 
    $("#fieldMessage").focus();
  })
});

