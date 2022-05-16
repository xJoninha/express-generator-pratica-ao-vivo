const express = require('express')
const controller = require('../controllers/SandaliasController')
const router = express.Router()

router.get('/', controller.index)
router.get('/exclusivas/:id?', controller.vip)
router.get('/:id', controller.show)

module.exports = router