require('dotenv').config({path: "../.env"})
var suap = require("../src");

// get token
suap.auth(
	process.env.MATRICULA, 
	process.env.PASSWORD)
.then(token =>
{
	// console.log(token)
	suap.getData();
});

