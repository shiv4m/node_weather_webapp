const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hpdjRtIiwiYSI6ImNqeGFxMnZ4cjE5MWczb3FiOTE0eDVoaXQifQ.xwLDvAr363vhgwPuMQqDaw&limit=1'
    request({url, json: true}, (error, body) => {
        // console.log(body.body)
        if(error){ 
            callback('Some error occurred', undefined) 
        }else if(body.body.features.length === 0){
            callback('Unable to find the location', undefined)
        }else{
            callback(undefined, {
                lat: body.body.features[0].center[0],
                long: body.body.features[0].center[1],
                location: body.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode