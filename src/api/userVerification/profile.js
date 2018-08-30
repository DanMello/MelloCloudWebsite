exports.getProfile = function (req, res, next) {

  req.app.jwt.verify(req.params.token, 'legalseafoods', function (err, decoded) {

    req.app.db('users')
      .where('id', decoded.id)
      .first()
      .then(user => {

        if (!user) throw new Error('Invalid Token')

        res.json({
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          profile_pic: user.profile_pic || '/assets/default.png'
        })

      }).catch(err => {

        res.json({
          error: true,
          message: err.message
        })
      })
  })
}