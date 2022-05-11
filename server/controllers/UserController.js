const users = require('../data/users')

const controller = {
  index: (req, res) => res.render('users', { title: "Usuários", users: users }),
  show: (req, res) => {
    console.log(req.params.id)
    const foundUser = users.filter(user => user.id == req.params.id)
    if(!foundUser.length) {
      res.render('users', { title: "Usuário Não Encontrado", users: null })
    }
    res.render('users', { title: "Usuário por ID", users: foundUser })
  },
  assinante: (req, res) => {
    res.render('users', { title: "Usuários ativos", users: users.filter(user => user.assinante) })
  }
}

module.exports = controller