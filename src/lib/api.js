var {host, routes} = require("../config.json");

var API = function()
{	
	/**
	* @param string name
	*
	* @return string route
	*/
	function route(name)
	{
		return host + routes[name];
	}

	return {
		route
	}
}();

module.exports = API;