/**
 * Routes: Estudiante
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const { Router } = require('express');
const controller = require("./curso.controller");

const router = new Router();

router.get('/listado', (req, res ) => {
  res.render('listado', {
    titulo: 'Listado de Estudiantes'		
  })	
});

const auth = function(req, res, next) {
  if (req.session.auth){
    return next()
  }
  return res.redirect('login');   
};

router.post("/agregar-curso", auth,controller.create);
router.get("/ver-cursos",auth, controller.index);
router.get("/curso", auth, controller.show);
router.get("/inscribir-curso", auth,  controller.coursesAvailable);
router.post("/agregar-usuario-curso", auth,  controller.agregarUsuarioCurso)
router.get("/actualizar", auth,  controller.updateState);
router.get("/ver-inscritos", auth,  controller.seeSuscribed);
router.get("/eliminar-usuario", auth,  controller.deleteUserCourse);
 

module.exports = router;
