const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
	name: {type: String, unique: true},
	description: String,
	url: String,
	category: String,
	sub_category: String,
	compatible_os: String,
	demographic: String,
	language: String,
	company: String,
	cost_low: Number,
	cost_high: Number,
	cost_classroom: String,
	//amazon_url: String,
	msrp: String,
	//curriculum: String,
	title_image: String,
	action_image: String,
	available: Boolean,
});

module.exports = mongoose.model('Tool',ToolSchema);
