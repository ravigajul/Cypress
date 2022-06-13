describe('Looping',()=>{
    it('Looping through elements to find a button and click it',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el,index,$list) => {
            if($el.find('h4.product-name').text().includes('Beetroot')){
                cy.wrap($el).find('button[type="button"]').click()
            }
        })
    })
    
})