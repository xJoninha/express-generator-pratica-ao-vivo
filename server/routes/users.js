const express = require('express');
const controller = require('../controllers/UserController')
const router = express.Router();

/* GET users listing. */
router.get('/', controller.index);

module.exports = router;
