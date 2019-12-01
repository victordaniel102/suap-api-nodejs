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
	* @param {string} text
	* @param {int} code
	*
	* @return {object} object error
	*/
	function createErrorResponse(text, code)
	{
		return {
			"title": "Error",
			"code": code,
			"detail": text
		}
	}

	/**
	* @param {object} error
	*/
	function errorResponseHandler(error)
	{
		var {data, status} = error.response;

		throw createErrorResponse(data.detail, status);
	}

	return {
		route,
		errorResponseHandler
	}
}();

module.exports = API;