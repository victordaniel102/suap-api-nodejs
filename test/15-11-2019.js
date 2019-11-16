require('dotenv').config({path: "../.env"})
var suap = require("../src");


(async function()
{
	var token = await suap.auth(
		process.env.MATRICULA, 
		process.env.PASSWORD);

	// var data = await suap.getData();
	// var years = await suap.getYears();
	// var notes = await suap.getNotes(2019, 1);
	// var classes = await suap.getClasses(2019, 1);
	var _class = await suap.getClass(48553);

	console.log(_class);
})();