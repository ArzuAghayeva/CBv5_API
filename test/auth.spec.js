const axios = require('axios')
const {expect} = require('chai')

describe('Authentication', function () {
    it('Successful Login status code',    async function () {
        const response = await axios.post('https://clientbase-server.herokuapp.com/v5/user/login', {
            email: 'jacksparrow@pirate.com',
            password: 'Pirate666!'
        })
        expect(response.status).to.eq(200)
     })
    it('Successful login message',  async function () {
        const response = await axios.post('https://clientbase-server.herokuapp.com/v5/user/login', {
            email: 'jacksparrow@pirate.com',
            password: 'Pirate666!'
        })
        expect(response.data.message).to.eq('Auth success')
    })
})