const express = require('express')
const parser = require('body-parser')
const Url = require('./db/models.js').Url

const app = express()

app.set('port', process.env.PORT || 3001)
app.set('view engine', 'hbs')

app.use(parser.urlencoded({extended: true}))

app.listen(app.get('port'), () => {
  console.log(`Express Started on ${app.get('port')}`)
})

app.get('/urls', (req, res) => {
  Url.find({}, (err, urls) => {
    res.render('index', { urls })
  })
})

app.post('/urls', (req, res) => {
  Url.create(req.body.url, (err, url) => {
    res.redirect('/urls')
  })
})

app.get('/:short', (req, res) => {
  Url.findOne({ short: req.params.short }, (err, url) => {
    res.redirect(url.long)
  })
})

app.get('/urls/:short/delete', (req, res) => {
  Url.remove({ short: req.params.short }, () => {
    res.redirect('/urls')
  })
})
