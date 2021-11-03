require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs')
const csv = require('csv-parser')
const Tool = require('./server/models/ToolModel')

debugger;
// DB connection
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
});

// Clear the database
Tool.deleteMany({}, () => {

fs.createReadStream('tools.csv')
  .pipe(csv())
  .on('data', function (row) {

		if (row.product){
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
				cost_low: row.cost_low,
				cost_high: row.cost_high,
				cost_classroom: row.classroom_kit_cost,
				//amazon_url: row.amazon_url,
				//curriculum: row.curricula,
			})

			newTool.save(function(err,tool){
				if(err){
					console.log(err);
					console.log(tool);
				}
			})
		}
  })
  .on('end', function () {
		console.log('Import Successful');
	})
})
