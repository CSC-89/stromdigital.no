var express = require('express')
var ejs = require('ejs')
var bodyParser = require('body-parser')
var jquery = require('jquery')
var app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))


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



//SERVER START

app.listen(3000, () => {
	console.log("Server Up")
})