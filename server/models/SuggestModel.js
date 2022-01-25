const mongoose = require('mongoose');

const SuggestSchema = new mongoose.Schema({
	name: String,
	url: String,
	referrer_email: String,
});

module.exports = mongoose.model('Suggestion',SuggestSchema);
