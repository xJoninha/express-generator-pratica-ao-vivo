const express = require("express")
const controller = require("../controllers/CachorrosController")
const router = express.Router()

router.get("/", controller.mostrarOsDogTudo)

module.exports = router