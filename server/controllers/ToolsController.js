const Tool = require('../models/ToolModel');
const {error} = require('console');

exports.getTools = (async (_req, res) => {
  const tools = await Tool.find();
  res.send(tools);
});

const selectFields = [
	"category",
	"sub_category",
	"demographic",
	"language",
	"compatible_os",
]

exports.getOptions = (async(_req,res) => {
	var optionsList = {}
	for (const field of selectFields){
		const distincts = await Tool.distinct(field);

		// Calculate cid, or Case-Insensitive-Distinct, and filter for distinct values
		let cids = [... new Set(distincts.map(d => d.toLowerCase()))]

		// Remove "" as a possible option
		const index = cids.indexOf("")
		if(index != -1){
			cids.splice(index,1)
		}
		let selectValues = []
		for(const distinct of cids){
			const cid = distinct.toLowerCase()
			selectValues.push({value:cid,label:cid})
		}

		// Sort the list
		selectValues.sort((a,b)=>(a.value > b.value) ? 1:-1)

		optionsList[field] = selectValues;
	}


	res.json(optionsList)
});

exports.saveTool = (async(req,res) => {
	res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
	// This is most of the data, we are just missing the image
	const tool = req.body;

	// Store the images
	const files = req.files
	files.forEach((file) => {
		switch(file.fieldname){
			case 'titleImage':
				tool['title_image'] = {"data": file.buffer,"contentType":file.mimetype}
				break;
			case 'actionImage':
				tool['action_image'] = {"data": file.buffer,"contentType":file.mimetype}
				break;
			default:
				console.log("Unexpected Image")
		}
	});
	
	debugger;
	
	const id = tool._id;
	delete tool._id;
	if (id) {
			Tool.update({_id: id}, tool, {upsert: true}, function (err) {
				if(err){
					console.log("Save Error", tool, err);
					res.send("Failed to save");
				}
				else{
					console.log("Saved Record",tool);
					res.send("Save successful");
				}
			});
	}
});

exports.deleteTool = (async(req,res) => {
	res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
	const id = req.body.id;
	if (id) {
			await Tool.findByIdAndDelete(id, function (err) {
				if(err){
					console.log("Delete Error", err);
					res.send("Failed to delete");
				}
				else{
					console.log("Deleted Record", id);
					res.send("Delete successful");
				}
			});
	}
	else{
		const errorMessage = "No id found on delete";
		console.log(errorMessage);
		res.send(errorMessage);
	}
});
