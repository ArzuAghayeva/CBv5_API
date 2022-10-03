const axios = require('axios')

class AuthHelper {        //export is not working. FIND REPLACEMENT!!!
    response

    async login(email, password){
        this.response = await axios
            .post('https://clientbase-server.herokuapp.com/v5/user/login', {email, password})
            .then(function(response){
                return response})
            .catch(function(error){
                return error})
        return this.response
    }
}
export default new AuthHelper()