exports.signup = function (req, res, next) {

  let newUser = {
    email: req.body.email.toLowerCase(),
    password: req.app.bcrypt.hashSync(req.body.password)
  }

  let secret = 'legalseafoods'

  req.app.db('users')
    .insert(newUser)
    .then(ids => {

      let token = req.app.jwt.sign({
        id: ids[0]
      }, secret)

      res.json({
        token
      })

    }).catch(err => {

      console.log(err)

      res.json({
        error: true,
        message: "There was a problem creating your account, please try again in a few minutes"
      })
    })
}