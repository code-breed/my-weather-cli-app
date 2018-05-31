var request = require('request');
var yargs = require('yargs');

var argv = yargs
    .options({
        address: {
            alias: 'a',
            describe: 'Address of Your Location',
            demand: 'true',
            string: true
        }
    })
    .help()
    .argv;

    var address = argv.address;
    console.log(address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyB_E8lBH3rRZ0Vj-k1P5zlMGTXqWVznyow`,
    json: true
}, (err, res, body) => {
    if(err)
        console.log('Could Not Connect to The Server');
    else if(body.status === 'ZERO_RESULT')
        console.log('Address Not Found')
    else if(res.statusCode === 200)
    {
        console.log(body.results[0].formatted_address);
        console.log(body.results[0].geometry.location.lat);
        console.log(body.results[0].geometry.location.lng);        
    }
    else 
        console.log('Something Went Wrong!');
});