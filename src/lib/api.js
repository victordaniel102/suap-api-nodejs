var {host, routes} = require("../config.json");

var API = function()
{
	function route(name)
	{
		return host + routes[name];
	}

	return {
		route
	}
}();

module.exports = API;