export class APIRequest{
    getToken(){
        let previousDate;
        const requestBody = {
            "user": {
                "email": "ravi.gajul@test.com",
                "password": "Ant3m3an!"
            }
        }
        cy.fnPad(new Date().getDate()-1).then(n=>{
            console.log('The hey is '+n)
            previousDate=n
        })
        return  cy.request({
            method: 'POST',
            url: 'https://api.realworld.io/api/users/login?date=' + previousDate+"'",
            headers: {'Content-Type': 'application/json'},
            body: requestBody
        }).then(response=>{
            console.log(response)
            return response
        })
    }
}

export const apirequest = new APIRequest()