require('dotenv').config();
const mongoose = require('mongoose');
const Tool = require('./server/models/ToolModel')
const CSV = require('csv-string')

// DB connection
const DB_URL = process.env.DB_URL;
const _db = mongoose.connect(DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
});

exports.updateTools = (async(csvString) => {
	// Store the tools
	let tools = []
	const rows = CSV.parse(csvString,{ output: 'objects' });

	// Clear the database
	await Tool.deleteMany({})

	// Process each row into a tool
	rows.forEach((row) => {

		// Convert costs to numbers
		let cost_high = 0;
		let cost_low = 0;
		if (row.cost_high != null){
			cost_high = parseFloat(row.cost_high.replace("$",""))
		}
		if (row.cost_low != null){
			cost_low = parseFloat(row.cost_low.replace("$",""))
		}

		// Convert the availability to bool
		let available = false;
		if (row.available === "TRUE"){
			available = true;
		}

		// Create the tool corresponding to this csv row
		const newTool = new Tool({
			name: row.product,
			description: row.description,
			url: row.url,
			category: row.codebook_category,
			sub_category: row.codebook_sub_category,
			demographic: row.target_demographic,
			compatible_os: row.compatible_OS,
			language: row.coding_language,
			company: row.company,
			cost_low: cost_low,
			cost_high: cost_high,
			cost_classroom: row.classroom_kit_cost,
			available: available,
			title_image: row.title_image,
			action_image: row.action_image,
		})

		tools.push(newTool)

	})

	// Actually insert the tools into the database
	const insertResult = await Tool.collection.insertMany(tools)
	return insertResult;
});
