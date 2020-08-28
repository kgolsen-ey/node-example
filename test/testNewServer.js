// simple Mocha test of index
/* eslint no-var: "error" */
/* eslint-env es6 */

const expect = require('chai').expect
const http = require('http')
const newServer = require('../newServer')

describe('newServer()', () => {
  it('should return a valid server object', () => {
    let server = newServer()

    expect(server instanceof http.Server).to.be.true
  })
})
