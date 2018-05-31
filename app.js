const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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
            {
                weather.getWeather(result, (err, result) => {
                    if(err)
                        console.log(err);
                    else
                    {
                        console.log('Temperature: ', (( result.temperature - 32 ) * 5 / 9).toFixed(2));
                        console.log('Apparent Temperature: ', (( result.apparentTemperature - 32 ) * 5 / 9).toFixed(2))
                    }
                });
            }
    });
    
    

