const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');
// locslhost 3000 (get request )
router.get('/', home_controller.index);

module.exports = router;
