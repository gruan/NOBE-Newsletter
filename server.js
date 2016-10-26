(function() {
  'use strict'
  var express = require('express')
  var app = express()

  app.use(express.static('app'))

  app.get('/', function(req, res) {
    res.sendFile(__dirname + '/newsletter/index.html')
  })

  var port = 8080
  app.listen(port, function() {
    console.log('Server up and running! On ' + port)
  })
})()
