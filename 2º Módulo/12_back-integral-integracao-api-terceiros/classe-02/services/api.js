
const axios = require('axios');


const instaciaAxios = axios.create({
    baseURL: 'https://ipgeolocation.abstractapi.com/v1/',
    params:{
        api_key: 'd8792f70483341f7bf3cdb1e796dd1cc',
        ip_address: ''
    }
})

module.exports = instaciaAxios;