

const fs = require('fs');

fs.copyFile('./resources/Config.js','./node_modules/turtlecoin-wallet-backend/dist/lib/Config.js',(err) => {
	if (err) throw err;
	console.log('File was coopied to destination');
});