//Requires
const mongoose = require('mongoose');
const express = require('express')
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const config = require('./config');
const configExpress = require('./config/express');
const configSession = require('./config/session');
const configViewsPartials = require('./config/viewsPartials');
const routes = require("./routes/");
const socketsChat = require("./services/chat")

// Connect to MongoDB
mongoose.connect(config.mongo.uri, { useNewUrlParser: true }, (error, result) => {
	if(error){
		return console.log(error);
	}
	console.log("conectado!")
});
// mongoose.connection.on('error', (err) => {
//   console.error('Error', 'MongoDB connection error', {
//     data: err,
//     time: new Date().toISOString(),
//   });
//   process.exit(-1);
// });

configSession(app);
socketsChat(io);
configExpress(app);
configViewsPartials(app, express);
routes(app);

server.listen(config.port, () => {
	console.log (`servidor en el puerto ${config.port}`);
});
