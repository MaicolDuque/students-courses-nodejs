/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

 const estudiantes = require("../services/estudiante");
 const cursos      = require("../services/curso");
 const usuarios    = require("../services/usuario");


 module.exports = (app) => {
<<<<<<< HEAD
  const auth = function(req, res, next) {
    if (req.session.auth){
      return next()
    }
    return res.redirect('login');   
  };
  
=======

>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
  app.use("",estudiantes);
  app.use("",cursos);
  app.use("",usuarios);

<<<<<<< HEAD
  app.get('/',auth, (req, res ) => {
    console.log("SISISIZAS=>", req.session)
    res.render('index', {
      titulo: 'Inicio',
      session: JSON.stringify(req.session)		
=======
  app.get('/', (req, res ) => {
    res.render('index', {
      titulo: 'Inicio'		
>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
    })	
  });

  app.get('*',(req,res)=> {
    res.render('error', {
      titulo: "Error 404"
    })
  });

  // app.post('/', (req, res ) => {

  //   res.render('indexpost', {
  //     titulo: 'Inicio',
  //     nombre: req.body.usuario		
  //   })	
  // });

  // app.post('/calculos', (req, res ) => {
  //   res.render('calculos', {
  //     titulo: 'Calcular Promedio',
  //     estudiante : {	
  //         nombre: req.body.nombre,
  //         matematicas: parseInt(req.body.matematicas),
  //         ingles: parseInt(req.body.ingles),
  //         programacion: parseInt(req.body.programacion)
  //     }	
  //   })	
  // });

  // // app.get('/listado', (req, res ) => {
  // //   res.render('listado', {
  // //     titulo: 'Listado de Estudiantes'		
  // //   })	
  // // });

  // app.get('/actualizar', (req, res ) => {
  //   res.render('actualizar', {
  //     titulo: 'Actualizar un Curso'		
  //   })	
  // });

  // app.post('/actualizar', (req, res ) => {
  //   res.render('actualizarPost', {
  //     titulo: 'Actualizar un Curso',
  //     nombre: req.body.nombre,
  //     asignatura: req.body.asignatura,
  //     nota: parseInt(req.body.nota)
  //   })	
  // });
 }