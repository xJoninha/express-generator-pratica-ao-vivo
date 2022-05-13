const sandalias = require("../data/sandalias")

const controller = {
  index: (req, res) => res.render('sandalias', { title: "Sandálias", produtos: sandalias })
}

module.exports = controller