// API Routes
// =============================================================

// Search for Specific Character (or all characters) - provides JSON
app.get('/api/friends', function(req, res){

	// var chosen = req.params.characters;

	// if(chosen){
	// 	console.log(chosen);

	// 	for (var i=0; i <characters.length; i++){

	// 		if (chosen == characters[i].routeName){
	// 			res.json(characters[i]);
	// 			return;
	// 		}
	// 	}

	// 	res.json(false);
	// }

	// else{
	// 	res.json(characters);
	// }
})

// Create New Characters - takes in JSON input
app.post('/api/friends', function(req, res){

	// var newcharacter = req.body;
	// newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase()

	// console.log(newcharacter);

	// characters.push(newcharacter);

	// res.json(newcharacter);
})