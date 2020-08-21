const http = require('http');
// const https = require('https');
// const fs = require('fs');
const app = require('./app');

if (process.env.MODE === 'production') {
	// Certificate
	// const privateKey = fs.readFileSync('/etc/letsencrypt/live/verdensbestedyr.no/privkey.pem', 'utf8');
	// const certificate = fs.readFileSync('/etc/letsencrypt/live/verdensbestedyr.no/cert.pem', 'utf8');
	// const ca = fs.readFileSync('/etc/letsencrypt/live/verdensbestedyr.no/chain.pem', 'utf8');

	// const credentials = {
	// 	key: privateKey,
	// 	cert: certificate,
	// 	ca: ca
	// };

	// Running on port 3005 because NGINX is listening on port 3005
	// const port = 3005;

	// const httpsServer = https.createServer(credentials, app);

	// httpsServer.listen(port, () => {
	// 	console.log('HTTPS Server running on port', port);
	// });
} else {
	const port = process.env.PORT;

	const httpServer = http.createServer(app);

	httpServer.listen(port, () => {
		console.log('HTTP Server running on port', port);
	});
}