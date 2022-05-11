const express = require('express');
const controller = require('../controllers/UserController')
const router = express.Router();

/* GET users listing. */
router.get('/', controller.index);
router.get('/assinante', controller.assinante);
router.get('/:id', controller.show);

module.exports = router;