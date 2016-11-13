(function() {
  'use strict'
  var express = require('express')
  var app = express()

  app.use(express.static('app'))

  app.use('/images', express.static(__dirname + '/newsletter/images'))

  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/newsletter/index.html')
  })

  app.get('/main.css', function(req, res) {
    res.sendFile(__dirname + '/newsletter/main.css')
  })
  var port = 8080
  app.listen(port, function() {
    console.log('Server up and running! On ' + port)
  })
})()
