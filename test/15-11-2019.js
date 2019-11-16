var suap = require("../src");

suap.auth("20171011110041", "Picole123@")
.then(token =>
{
	console.log(token)
});

