/**
 * Routes: Estudiante
 * @author: Maicol Felipe Duque Urrea   <maicolduque01@gmail.com
 */

const { Router } = require('express');
const controller = require("./usuario.controller");
<<<<<<< HEAD
var multer  = require('multer')
var upload = multer({})
const router = new Router();


const auth = function(req, res, next) {
  if (req.session.auth){
    return next()
  }
  return res.redirect('/login');   
};

router.get('/login', controller.getLogin);
router.get('/logout', controller.sessionDestroy);
router.post('/login', controller.login);
router.get('/ver-usuarios',auth, controller.index);
router.post('/registrar', auth, upload.single('avatar'), controller.create);
router.get('/registrar', auth, controller.showRegistrationForm);

=======

const router = new Router();

router.get('/listado', (req, res ) => {
  res.render('listado', {
    titulo: 'Listado de Estudiantes'		
  })	
});


router.post('/registrar', controller.create);
router.get('/registrar', controller.showRegistrationForm);
>>>>>>> dcacd15587b02f254561642a2545a56678e768cd

module.exports = router;
