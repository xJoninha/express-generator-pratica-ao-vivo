const users = require('../data/users')

const controller = {
    index: async (req, res, next) => await res.send(users)
}
  
module.exports = controller