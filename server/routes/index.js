// ./routes/index.js
const home = require('./home')
const login = require('./login')
const register = require('./register')

module.exports = app => {
  app.use('/login', login)
  app.use('/register', register)
  app.use('/', home)
}