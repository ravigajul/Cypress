describe('WebTable Navigation',()=>{
    it('Navigating through webtables',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table#product tr').find('td').each(($el,index,$list)=>{
                
        })
    })
})