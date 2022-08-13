const axios = require("axios");
const res = require("express/lib/response");

const getFromUrl = (url, config) => {      
    return axios.get(url, config);
  };

const listCity = async (req, res) => {
    try {
        response = []
        let config = {
            headers: {
              key: "54e637afa21ac2812294ca72f45ff16c",
            }
        }

        getFromUrl(`https://api.rajaongkir.com/starter/city`, config).then((results) => {
            let result = results.data.rajaongkir.results

            for (let index = 0; index < result.length; index++) {
                response.push({ name: result[index].city_name })
            }

            res.rest.success({ data: response })
        })
    } catch (error) {
        return res.rest.serverError(error.message)
    }
}

module.exports = {
    listCity
}