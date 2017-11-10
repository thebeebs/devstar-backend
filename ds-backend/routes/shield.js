var express = require('express');
var router = express.Router();
var requestHelper = require('../requestHelper');
var incomingHandler = require('../incomingHandler');
var missionHandler = require('../missionHandler');

const xCoordinate = 33;
const yCoordinate = 45;

/**
 * Endpoint to hit the shield.
 */
router.get('/' + xCoordinate + '/' + yCoordinate + '/:squadName/:microserviceName', function(req, res, next) {
    incomingHandler.incomingFire(req.params.squadName, req.params.microserviceName, missionHandler.MISSION.SHIELD);
			if (req.params.squadName == 'test') {
				// this is used to test out the endpoint from Postman
				req.params.squadName = 'blue	';
				incomingHandler.incomingFire(req.params.squadName, req.params.microserviceName, missionHandler.MISSION.SHIELD);
				res.send('Shield hit!');
			} else {
				requestHelper.isFromOracle(req)
					.then( isOracle => {
						if (isOracle) {
							incomingHandler.incomingFire(req.params.squadName, req.params.microserviceName, missionHandler.MISSION.SHIELD);
							res.send('Shield hit!');
						} else {
							res.send('Caller is not a fighter!');
						}
					});
			}
});

module.exports = router;
