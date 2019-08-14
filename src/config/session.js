/**
 * @author: Maicol Felipe Duque Urrea <maicolduque01@gmail.com>
 */


/**
 * Express configuration
 */

const session = require('express-session')
const MemoryStore = require('memorystore')(session)


module.exports = (app) => {
  
  app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    secret: 'keyboard cat'
  }))

  
};
