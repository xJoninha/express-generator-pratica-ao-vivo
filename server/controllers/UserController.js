const users = require('../data/users')

const controller = {
    index: (req, res) => res.render('users', {title: "Usuários", user: "users"})
}
  
module.exports = controller