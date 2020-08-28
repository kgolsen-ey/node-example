// Create a new http.Server
/* eslint no-var: "error" */
/* eslint-env es6 */

const http = require('http')

function newServer () {
  return (http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
  }))
}

module.exports = newServer
