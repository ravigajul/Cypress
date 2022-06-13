describe('Alerts',()=>{
    it('Cypress auto accepts alerts',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        const stub = cy.stub()
        cy.on('window:alert',stub)
        cy.get('input#alertbtn').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Hello , share this practice page and share your knowledge')
        })
        
    })
    
})