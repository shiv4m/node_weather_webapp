const path = require('path')
const express = require('express')
const homePage = path.join(__dirname, '../public/')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

app.set('view engine','hbs')
app.use(express.static(homePage))

app.get('', (req, res) => {
    if(!req.query.location){
        return res.render('index', {
            error: 'Please provide a location',
            name: 'Shivam'
        })
    }
    
    geocode(req.query.location, (error, {lat, long, location} = {}) => {
        if(error){
            return res.render('index', {
                error: error,
                name: 'Shivam'
            })
        }
        forecast(lat, long, (error, forecastData) => {
            if(error){
                return res.render('index', {
                    error: error,
                    name: 'Shivam'
                })
            }
            res.render('index', {
                title: 'Weather App',
                name: 'Shivam',
                location: location,
                data: forecastData
            })
        })
    })
})

app.listen(8080, () => {
    console.log('Server is up.')
})