
exports = module.exports = function(app) {

  //Load react js bundle
  // app.get('/', function (req, res) {
  //   res.sendFile(app.path.join(__dirname, 'build', 'index.html'))
  // })

  //api post routes
  app.post('/account/login', require('./src/api/userVerification/login').login)
  app.post('/account/signup', require('./src/api/userVerification/signup').signup)
  app.post('/account/signup/emailCheck', require('./src/api/userVerification/emailcheck').checkEmail)
  app.get('/users', function (req, res) {

    req.app.db('users')
      .where('email', 'jdanmello@gmcim.com')
      .first()
      .then(user => {

        res.json(user)
      })
  })
}