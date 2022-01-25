const express = require('express');
const SuggestController = require('../controllers/SuggestController');

const router = express.Router();

router.get('/', SuggestController.getSuggestions);
router.post('/save',SuggestController.saveSuggestion);
router.post('/delete', SuggestController.deleteSuggestion);

module.exports = router;
