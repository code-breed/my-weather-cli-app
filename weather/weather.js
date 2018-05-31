const request = require('request');

var getWeather = (address, callback) => {
    request({
        url: `https://api.darksky.net/forecast/d9b42db43cb7a4719d07208547645bb5/${address.lat},${address.lng}`,
        json: true
    }, (error, response, body) => {
        if(error)
            callback('Error Connecting with Server!');
        else if(body.code === 400)
            callback('Location Not Found!')
        else
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
    });
}

module.exports = {
    getWeather
}

