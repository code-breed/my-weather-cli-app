const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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

   geocode.geocodeAddress(argv.address, (errorMessage, result ) => {
        if(errorMessage)
            console.log(errorMessage);
        else
            console.log(result);
    });
    
    

