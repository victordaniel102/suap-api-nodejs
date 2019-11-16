var axios = require("axios");
var api = require("./lib/api");

var SUAP = function()
{

	/**
     * @param string type
     * @param string method
     * @param object body
     *
     * @return promise response
     */
	function request(type, method, body)
	{
		return axios.post(
			api.route(type),
			body
		);
	}

	/**
     * @param string username
     * @param string password
     *
     * @return string token
     */
	async function auth(username, password)
	{
		var {data} = await request("auth", "post",
		{
			username,
			password
		});

		return data.token;
	}

	return {
		auth,
	}
}()

module.exports = SUAP;