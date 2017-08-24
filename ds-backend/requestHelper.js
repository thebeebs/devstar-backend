var dns = require('dns');

var isFromOracle = function(req, callback) {
	var myPromise = new Promise(function (resolve, reject) {
		// TODO: This must be failsafe and not crash
		dns.reverse(req.headers['client-ip'], function(err, domains) {
			if (err) {
				resolve(false);
			} else {
				return resolve(JSON.stringify(domains).includes("oracle"));
			}
		});
   });
   return myPromise;
}

module.exports = {
		isFromOracle : isFromOracle
}