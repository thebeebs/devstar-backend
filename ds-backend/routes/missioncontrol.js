var express = require('express');
var router = express.Router();
var db = require('../databaseHandler');
var deathstarHandler = require('../deathstarHandler');
var logHandler = require('../logHandler');

router.post('/start', function(req, res, next) {
	var bd = req.body;
	console.log("Starting A New launch")
	
	var name = bd.name;
	var function1url = bd.function1url;

	// TODO: Check that the name isn't already in the Database
	
	deathstarHandler.insertLaunch(name, function1url)
	.then( id => {
		res.send(`Launch Scheduled with ID: ${id}`);
	})
	
	});

module.exports = router;
