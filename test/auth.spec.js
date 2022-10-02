const axios = require('axios')
const {expect} = require('chai')

describe('Authentication', function () {
    describe('Login with valid credentials', function () {
        it('Successful Login status code', async function () {
            const response =    await axios.post('https://clientbase-server.herokuapp.com/v5/user/login', {
                email: 'jacksparrow@pirate.com',
                password: 'Pirate666!'
            })
                .then(function(response){
                    return response})
                .catch(function(error){
                    return error})
            expect(response.status).to.eq(200)
        })
        it('Successful login message', async function () {
            const response = await axios.post('https://clientbase-server.herokuapp.com/v5/user/login', {
                email: 'jacksparrow@pirate.com',
                password: 'Pirate666!'
            })
                .then(function(response){
                    return response})
                .catch(function(error){
                    return error})
            expect(response.data.message).to.eq('Auth success')
        })
    })

    describe('Login with invalid credentials', function () {
        it.only('Unsuccessful Login status code', async function () {
            const error = await axios.post('https://clientbase-server.herokuapp.com/v5/user/login', {
                email: 'test@test.com',
                password: 'Test123'
            })
                    .then(function(response){
                        return response})
                    .catch(function(error){
                        return error})

            console.log(error.response.data)

            expect(error.response.status).to.eq(400)
        })
        it('Unsuccessful login message', async function () {
            const error = await axios.post('https://clientbase-server.herokuapp.com/v5/user/login', {
                email: 'test@test.com',
                password: 'Test123'
            })
                .then(function(response){
                    return response})
                .catch(function(error){
                    return error})
            expect(error.response.data.message).to.eq('Auth failed')
        })
    })
})