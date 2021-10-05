const Tool = require('../models/ToolModel');

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
