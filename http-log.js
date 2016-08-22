#! /usr/bin/env node

var port = process.argv[2] || 7777
var statusCode = process.argv[3] || 200
var answer = process.argv[4]

require('http').createServer(function(request, response) {
  console.log('--------------------------------------------')
  console.log('Request started:', new Date)
  console.log('Url:', request.url)
  console.log('Method:', request.method)
  console.log('Headers:', request.headers)
  console.log('---------------- body start ----------------')
  request.on('error', function(err) {
    console.error('\nError on request', err)
  }).on('data', function(chunk) {
    process.stdout.write(chunk.toString())
  }).on('end', function() {
    console.log('\n----------------  body end  ----------------\n')
    response.on('error', function(err) {
      console.error('\nError on response', err)
    })
    response.statusCode = statusCode
    if (answer) {
      response.write(answer)
    }
    response.end()
  })
}).listen(port, function() {
  console.log('\n--------- server listening at ' + port + ' ---------')
  console.log('  Returning', answer ? answer : 'nothing', 'with status code', statusCode, '\n')
})
