require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs')
const csv = require('csv-parser')
const Tool = require('./server/models/ToolModel')

// DB connection
const DB_URL = process.env.DB_URL;
const db = mongoose.connect(DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
});

// Store the tools
let tools = []

// Clear the database
Tool.deleteMany({}, () => {

	fs.createReadStream('tools.csv')
		.pipe(csv())
		.on('data', async function (row) {

			if (row.product){
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
			}
		})
		.on('end', function () {
			Tool.collection.insertMany(tools, function(err,_tools){
				if(err){
					console.log("Error", err);
				}
				else{
					console.log('Import Successful');
				}
			})
		})
})
