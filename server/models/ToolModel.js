const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
	name: String,
	description: String,
	url: String,
	category: String,
	sub_category: String,
	compatible_os: String,
	demographic: String,
	language: String,
	company: String,
	cost_low: String,
	cost_high: String,
	cost_classroom: String,
	//amazon_url: String,
	msrp: String,
	//curriculum: String,
});

module.exports = mongoose.model('Tool',ToolSchema);
