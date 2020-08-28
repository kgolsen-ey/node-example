// simple Node 'Hello World' HTTP server
/* eslint no-var: "error" */
/* eslint-env es6 */

'use strict'

const http = require('http')
const hostname = 'some-server.com'
const port = 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
