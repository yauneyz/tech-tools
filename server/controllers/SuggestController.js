const Suggestion = require('../models/SuggestModel');

exports.getSuggestions = (async (_req, res) => {
  const suggestions = await Suggestion.find();
  res.send(suggestions);
});

exports.saveSuggestion = (async(req,res) => {
	debugger;
	res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
	// This is most of the data, we are just missing the image
	const suggestion = new Suggestion(req.body);

	suggestion.save(function(err){
				if(err){
					console.log("Save Error", suggestion, err);
					res.send("Failed to save");
				}
				else{
					console.log("Saved Record",suggestion);
					res.send("Save successful");
				}
	});
});

exports.deleteSuggestion = (async(req,res) => {
	res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
	const id = req.body.id;
	if (id) {
			await Suggestion.findByIdAndDelete(id, function (err) {
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
