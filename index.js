const express = require('express')
const port = process.env.PORT || 5000
const { engine } = require('express-handlebars')

const app = express()

app.engine('handlebars', engine({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => res.render('about'))

app.use((req, res) => {

    res.status(404)
    res.render('404')

})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`))
