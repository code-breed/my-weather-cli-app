const request = require('request');

var getWeather = (address) => {
    request({
        url: ``,
        json: true
    }, (error, response, body) => {
    
    });
}

module.exports = {
    getWeather
}