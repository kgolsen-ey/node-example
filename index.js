// simple Node 'Hello World' HTTP server
/* eslint no-var: "error" */
/* eslint-env es6 */

'use strict'

const newServer = require('./newServer')
const hostname = 'some-server.com'
const port = 8080

newServer().listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
