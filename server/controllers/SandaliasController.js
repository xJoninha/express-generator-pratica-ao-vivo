const sandalias = require("../data/sandalias")

const controller = {
  index: (req, res) => res.render('sandalias', { title: "Sandálias", subtitle: "Conheça todas as nossas sandálias", produtos: sandalias }),
  show: (req, res) => res.render('sandalias', { title: "Sandálias", subtitle: "Conheça todas as nossas sandálias", produtos: sandalias.filter(sandalia => sandalia.id == req.params.id) }),
  vip: (req, res) => {
    if(req.params.id) {
      res.render('sandalias', { title: "Sandálias Exclusivas", subtitle: "Conheça todas as nossas sandálias", produtos: sandalias.filter(sandalia => sandalia.id == req.params.id) })
    } else {
      res.render('sandalias', { title: "Sandálias Exclusivas", subtitle: "Conheça todas as nossas sandálias", produtos: sandalias.filter(sandalia => sandalia.exclusiva) })
    }
  }
}

module.exports = controller