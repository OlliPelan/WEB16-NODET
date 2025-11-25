const express =require('express')
const s = require('./s')
const lodash = require('lodash')

const app = express() //luodaan (initialisoidaan) express-applikaatio (expressjs.com)
const port = 3000 //määritetään portti jota käytetään

app.set('view engine','ejs') //määritetään app käyttämään ejs-template enginenä
                        // ejs oletuksena hakee ejs-tiedostot views-kansiosta

//---------MIDDLEWARE-----------------------------------

//---------ROUTES (ENDPOINTS)---------------------------
app.get('/', (req, res) => {
    res.render('index',{sanonta:lodash.sample(s.sanonnat)})

})
app.get('/login'), (req, res) => {
    res.render('login')
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})