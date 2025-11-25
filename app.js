const express = require('express')
const s = require('./s')
const lodash = require('lodash')

const app = express() //luodaan (initialisoidaan) express-applikaatio (expressjs.com)
const port = 3000 //määritetään portti jota käytetään
const fs = require('fs')


app.set('view engine','ejs') //määritetään app käyttämään ejs-template enginenä
                        // ejs oletuksena hakee ejs-tiedostot views-kansiosta

//---------MIDDLEWARE-----------------------------------
app.use(express.urlencoded({extended:false})) 
//---------ROUTES (ENDPOINTS)---------------------------
app.get('/', (req, res) => {
    res.render('index',{sanonta:lodash.sample(s.sanonnat)})

})

app.get('/save-user', (req, res) => {
    res.render('save-user')
})

app.post('/save-user', (req, res) => {
  const user = req.body.username
  const pass = req.body.password
  
    fs.writeFile('kayttajat.txt', user + '\n' + pass + '\n', (err) => {
        if (err) {
          console.error('Virhe tiedoston kirjoittamisessa:', err)
        } else {
          console.log('Käyttäjänimi ja salasana tallennettu tiedostoon kayttajat.txt')
        }
        
        })
     
    res.redirect('/') 
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})