const { apirequest } = require("../../support/api/apiRequest");
describe('This is a test to demo api token request',()=>{
    var token;
    it('test case to get access token',()=>{
        apirequest.getToken().then(response=>{
            console.log('This is from the calling file')
            console.log(response.body.user.token)
            token=response.body.user.token
        })
    })
    it('checking it token persists',()=>{
        console.log('This is another test')
        console.log(token)
    })      
})
