/**
 * Controller: Usuario
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */


<<<<<<< HEAD
 
 const Usuario = require("./usuario.model")
 const avatarDefault = "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";
 const sgMail = require('@sendgrid/mail');
 const {sendgrid} = require("../../config");
 const localStorage = require('localStorage')

 sgMail.setApiKey(sendgrid);
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);



 // Gets a list of students
function index(req, res) {  
  return Usuario.find().exec()
    .then(resp => {
      
      let users = resp.map(us => {    
        return {
          nombre: us.nombre,
          documento: us.documento,
          correo: us.correo,
          telefono: us.telefono,
          avatar: (us.avatar) ? us.avatar.toString('base64') : avatarDefault
        }       
      });

      res.render("ver-usuarios", {        
        usuarios: users,        
=======
 const Usuario = require("./usuario.model")


 // Gets a list of students
function index(req, res) {
  return Usuario.find().exec()
    .then(resp => {
      res.render("ver-cursos", {
        cursos: resp,
        cursosDisponibles: cursosDisponibles(resp)
>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
      })
    })
    .catch(handleError(res));
}


// Create student
function create(req, res) {
<<<<<<< HEAD

  const msg = {
    to: req.body.correo,
    from: 'maicolduque01@gmail.com',
    subject: 'Registro Exitoso ok!',
    text: 'Gracias por registrarse...',
    html: '<strong>Welcome!</strong>',
  };  
  console.log(msg);


=======
>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
  let newUsuario = {
    documento   : req.body.documento,
    nombre      : req.body.nombre,
    correo      : req.body.correo,
    telefono    : req.body.telefono,
    rol         : req.body.rol,
<<<<<<< HEAD
    avatar      : req.file.buffer
=======
>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
  }

  console.log(newUsuario)

  //Agregar nuevo usuario 
  Usuario.create(newUsuario)
  .then(user => {
<<<<<<< HEAD
    sgMail.send(msg);
=======
>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
    res.render("agregar-curso", {
      curso: true,
      mensajeOk: "Usuario registrado correctamente!",
      mensajeFail: "Ya se encuentra registrado en este curso"
    })
    console.log("SI:",user)
  })
  .catch(resp => {
    handleError(res, resp)
  });
    // .then(respondWithResult(res, 201))
    // .catch(handleError(res));
}


<<<<<<< HEAD
function getLogin(req, res){
  res.render("login");
}

function login(req, res){
  return Usuario.findOne({correo: req.body.email}).exec()
  .then(resp => {    
    console.log("RESP=>>>",resp)
    // res.redirect('/');	
    if(resp != null){
      console.log("Siiiiiii")
      req.session.email = resp.correo;
      req.session.nombre = resp.nombre;
      req.session.documento = resp.documento; 
      localStorage.setItem("session", JSON.stringify(req.session));
      console.log(req.session)      
      res.redirect("/");
    }else{      
      res.render("login");
    }
  })
  .catch(handleError(res));
}


function sessionDestroy(req, res){
  req.session.destroy(function(err) {
    localStorage.getItem("session", "")
    res.redirect("/login");
  })
}


=======
>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
// Create student
function showRegistrationForm(req, res) {    
    res.render('registrar');	
}




function cursosDisponibles(cursos){
  return cursos.filter(curso => curso.estado == 'disponible');
}

<<<<<<< HEAD
function handleError(res, code) {
  const statusCode = code || 500;
  return (err) => {
    res.status(statusCode).send(err);
  };
=======
function handleError(res,resp, code) {
  const statusCode = code || 500;  
    res.render("error", {
      mensaje: resp
    })  
>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
}

module.exports = {
  index,
  create,
<<<<<<< HEAD
  showRegistrationForm,
  getLogin,
  login,
  sessionDestroy
=======
  showRegistrationForm
>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
}