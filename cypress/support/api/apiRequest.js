export class APIRequest{
    getToken(){
        const requestBody = {
            "user": {
                "email": "ravi.gajul@test.com",
                "password": "Ant3m3an!"
            }
        }
        return  cy.request({
            method: 'POST',
            url: 'https://api.realworld.io/api/users/login',
            headers: {'Content-Type': 'application/json'},
            body: requestBody
        }).then(response=>{
            console.log(response)
            return response
        })
    }
}

export const apirequest = new APIRequest()