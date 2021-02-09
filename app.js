var express = require('express')
var ejs = require('ejs')
var bodyParser = require('body-parser')
var jquery = require('jquery')
var app = express()
let path = require('path')

let port = "3000"

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

//EMAIL
const nodemailer = require('nodemailer')
// let transport = nodemailer.createTransport({
//     service: 'tornado.email',
//     port: 587,
//     auth: {
//        user: '#',
//        pass: '#'
//     }
// })

// MailTrap
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5c867fdfbc3a0f",
      pass: "15cd1d739af134"
    }
  });


//ROUTES
app.get('/', (req, res) => {
	res.render("forsiden")
})

app.get('/omMeg', (req, res) => {
	res.render("about")
})

app.get('/tjenester', (req, res) => {
	res.render("tjenester")
})

app.get('/portfolio', (req, res) => {
	res.render("portfolio")
})

app.get('/kontakt', (req, res) => {
	res.render("kontakt")
})

app.get('/takk', (req, res) => {
	res.render("takk")
})


//MAIL

app.post('/submit', (req, res) => {

    let mailInfo = {
        navn: req.body.navn,
        orgNavn: req.body.orgNavn,
        email: req.body.email,
        telNum: req.body.telNum,
        emne: req.body.emne,
        melding: req.body.melding
    }

    let message = {
        from: `"${mailInfo.email}"`, // Sender address
        to: 'synne@stromdigital.no',         // List of recipients
        subject: `Ny Melding - ${mailInfo.orgNavn}`, // Subject line
        html: `<br> 
        <h3>Emne: ${mailInfo.emne}</h3> 
        <h4>Navn: ${mailInfo.navn} <br> Organisasjon: ${mailInfo.orgNavn}</h4> 
        <hr> 
        <p><br> ${mailInfo.melding}</p>` // Plain text body
    }
    
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    })

    res.redirect('/takk')
})


//SERVER START

app.listen(port, () => {
	console.log("APP listening on PORT:" + port)
})