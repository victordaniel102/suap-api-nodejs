var axios = require("axios");
var api = require("./lib/api");

var SUAP = function()
{	
    /**
    * user token to make requests
    */
    var token;

    /**
    * POST request to SUAP api
    *
    * @param {string} url
    * @param {object} body
    *
    * @return promise response
    */
    function postReq(url, body)
    {
        return axios.post(
            url,
            body);
    }

    /**
    * GET request to SUAP api
    *
    * @param {string} url
    *
    * @return promise response
    */
    function getReq(url)
    {
        return axios.get(url, { 
            headers: {
                "Authorization" : `JWT ${token}`
            } 
        });
    }

    /**
    * user antiander
    *
    * @param {string} username
    * @param {string} password
    *
    * @return {string} token
    */
    async function auth(username, password)
    {
        var {data} = await postReq(
            api.route("auth"),
            {
                username,
                password
            });

        token = data.token;

        return token;
    }

    /**
    * send personal user data
    *
    * @return {object} data
    */
    async function getData()
    {
        var {data} = await getReq(
            api.route("data"));

        return data;
    }

    /**
    * send school years to user
    *
    * @return {object} data
    */
    async function getYears()
    {
        var {data} = await getReq(
            api.route("year"));

        return data;
    }

    /**
    * send student grades
    *
    * @param {int} year
    * @param {int} term
    *
    * @return {object} data
    */
    async function getNotes(year, term)
    {
        var {data} = await getReq(
            api.route("notes")
            .replace("year", year)
            .replace("term", term));

        return data;
    }

    /**
    * send student classes
    *
    * @param {int} year
    * @param {int} term
    *
    * @return {object} data
    */
    async function getClasses(year, term)
    {
        var {data} = await getReq(
            api.route("classes")
            .replace("year", year)
            .replace("term", term));

        return data;
    }

    /**
    * send student class (outdated)
    *
    * @param {int} id
    *
    * @return {object} data
    */
    async function getClass(id)
    {
        var {data} = await getReq(
            api.route("class")
            .replace("id", id));

        return data;
    }

    /**
    * SET token value
    *
    * @param {string} tokenValue
    *
    * @return {object} data
    */
    async function setToken(tokenValue)
    {
       token = tokenValue;
    }

    return {
        auth,
        getData,
        getYears,
        getNotes,
        getClasses
    }
}();

module.exports = SUAP;