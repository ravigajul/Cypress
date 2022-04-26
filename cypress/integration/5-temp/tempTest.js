const { apirequest } = require("../../support/api/apiRequest");
describe('This is a test to demo api token request', () => {
    var token;
    it('test case to get access token', () => {
        apirequest.getToken().then(response => {
            console.log('This is from the calling file')
            console.log(response.body.user.token)
            token = response.body.user.token
        })
    })
    it('checking it token persists', () => {
        console.log('This is another test')
        console.log(token)
    })
    it('date', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        console.log(yesterday.toLocaleDateString('en-CA'))
    })
    it.only('modal dialogue', () => {
        cy.visit('https://app.staging.showcare.io/product-showcase/login')
        cy.wait(1000)
        cy.get('body').then(($body) => {
            // synchronously ask for the body's text
            // and do something based on whether it includes
            // another string
            if ($body.text().includes('Sign in to your account')) {
              // yup found it
              cy.get('.card-pf').should('be.visible')
              cy.get('#username', { timeout: 10000 }).eq(0).type('RaviGajul', { force: true })
              cy.get('#password').eq(0).type('Passw0rd!', { force: true })
              cy.get('#kc-login').eq(0).click({ force: true })
      
            } else {
              // nope not here
              cy.log('the modal pop is not displayed')
            }
          })

    })
})
