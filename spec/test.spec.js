const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
chai.use(chaiHttp)

const server = require('../server')

describe('API endpoint /api/whoami', function () {
    it('it should get a valid json', (done) => {
        chai.request(server)
            .get('/api/whoami')
            //.set('Accept-Language', 'en-GB,en-US;q=0.9,en;q=0.8')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('ipaddress').eql('127.0.0.1')
                res.body.should.have.property('language')
                res.body.should.have.property('software').include('node-superagent')
                done()
            })
    })
})