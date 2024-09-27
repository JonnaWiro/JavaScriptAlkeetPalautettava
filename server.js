// Express.js palvelin //
const path = require('path')
const express = require('express')

const app = express()

const henkilosto = require('./henkilosto.json')

//GET ALL etsitään kaikki henkilotiedot jsonista
app.get('/api/henkilosto', (req, res) => {
    res.json(henkilosto)
})

// Tehdään polkumääritys public -kansioon 
const polku = path.join(__dirname, './public')

// Sanotaan, että em. polussa on tiedostosisältö, jota palvelin käyttää, kun se saa http request
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
