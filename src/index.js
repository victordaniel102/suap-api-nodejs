var axios = require("axios");
var api = require("./lib/api");

var SUAP = function()
{	
    /**
    * User token used to make requests
    */
    var token;

    /**
    * @param string url
    * @param object body
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
    * @param string url
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
    * @param string username
    * @param string password
    *
    * @return string token
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
    * Send SUAP user data informations
    *
    * @return object data
    */
    async function getData()
    {
        var {data} = await getReq(
            api.route("data"));

        return data;
    }

    /**
    * Send SUAP user school years data
    *
    * @return object data
    */
    async function getYears()
    {
        var {data} = await getReq(
            api.route("year"));

        return data;
    }

    /**
    * Send SUAP user exams notes
    *
    * @param int year
    * @param int term
    *
    * @return object data
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
    * Send SUAP user classes
    *
    * @param int year
    * @param int term
    *
    * @return object data
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
    * Send SUAP user class (outdated)
    *
    * @param int id
    *
    * @return object data
    */
    async function getClass(id)
    {
        var {data} = await getReq(
            api.route("class")
            .replace("id", id));

        return data;
    }

    /**
    * Add a token value
    *
    * @param string tokenValue
    *
    * @return object data
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