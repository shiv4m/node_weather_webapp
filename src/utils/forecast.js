const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/35941003154f1c5015346f60981871c7/' + long + ',' + lat
    
    request({url, json: true}, (error, {body}) => {
        if(error){ 
            callback('Some error occurred', undefined) 
        }else if(body.error){
            callback('Unable to find the location', undefined)
        }else{
            const message = body.daily.data[0].summary + 'It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability * 100 + '% chance of rain.'
            callback(undefined, message)
        }
    })
}

module.exports = forecast