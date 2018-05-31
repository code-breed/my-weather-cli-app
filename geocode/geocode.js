const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodeAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyB_E8lBH3rRZ0Vj-k1P5zlMGTXqWVznyow`,
        json: true
    }, (err, res, body) => {
        if(err)
            callback('Could Not Connect to The Server');
        else if(body.status === 'ZERO_RESULTS')
            callback('Address Not Found!')
        else if(res.statusCode === 200 && body.status === 'OK')
        {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });     
        }
        else 
            callback('Something Went Wrong!');
    });
}

module.exports = {
    geocodeAddress
}