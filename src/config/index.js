/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */

 const all = {
  env: process.env.NODE_ENV,

  url: "https://nodejs-and-mongoose.herokuapp.com/",

  // Server port
  port: process.env.PORT || 8080,

  // Server IP
  ip: process.env.IP || '127.0.0.1',
  
<<<<<<< HEAD
  sendgrid: process.env.SENDGRID_API_KEY || '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',
=======

>>>>>>> dcacd15587b02f254561642a2545a56678e768cd
  // MongoDB connection options
  mongo: {
    uri: 'mongodb+srv://maicol:maicol123456@cluster0-xc611.mongodb.net/asignaturas?retryWrites=true&w=majority',
    db: 'asignaturas',
  },
 }

 module.exports = all;

