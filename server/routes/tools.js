const express = require('express');
const ToolsController = require('../controllers/ToolsController');

const router = express.Router();

router.get('/', ToolsController.getTools);

module.exports = router;
