var dns = require('dns');

var isFromOracle = function(req, callback) {
	console.info('isFromOracle called');
	var myPromise = new Promise(function (resolve, reject) {
		// TODO: This must be failsafe and not crash
		console.info('will do reverse, header is ' + req.headers['client-ip']);
		dns.reverse(req.headers['client-ip'], function(err, domains) {
			console.info('Got response');

			if (err) {
				console.info('is error');

				resolve(false);
			} else {
				console.info('IS ' + JSON.stringify(domains).includes("oracle"));

				return resolve(JSON.stringify(domains).includes("oracle"));
			}
		});
   });
   return myPromise;
}

module.exports = {
		isFromOracle : isFromOracle
}
