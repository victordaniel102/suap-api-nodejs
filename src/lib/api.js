var {host, routes} = require("../config.json");

var API = function()
{	
	/**
	* @param {string} name
	*
	* @return {string} route
	*/
	function route(name)
	{
		return host + routes[name];
	}

	/**
	* @param {object} error
	*/
	function errorResponseHandler(error)
    {
        throw "Error from SUAP: " + error.response.data.detail;
    }

	return {
		route,
		errorResponseHandler
	}
}();

module.exports = API;