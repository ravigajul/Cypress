describe('Geting inner text',()=>{
    it('Getting inner text of an element through jquery element',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el,index,$list) => {
            if($el.find('h4.product-name').text().includes('Beetroot')){
                cy.wrap($el).find('button[type="button"]').click()
            }
        })
    })
    it('Getting inner text of an element through cypress',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el,index,$list) => {
            cy.wrap($el).find('h4.product-name').invoke('prop','innerText').then(text=>{
                cy.log(text)
            })
        })
    })
    it('Cypress get inner text example',()=>{
        cy.visit('https://example.cypress.io/utilities')
        cy.get('a.dropdown-toggle').click()
        cy.get('ul.dropdown-menu').find('li a').each(($el,index,$list)=>{
            cy.wrap($el).invoke('prop','innerText').then(text=>{
                cy.log(text)
            })
        })
    })

    it('Jquery get inner text example',()=>{
        cy.visit('https://example.cypress.io/utilities')
        cy.get('a.dropdown-toggle').click()
        cy.get('ul.dropdown-menu').find('li a').each(($el,index,$list)=>{
            cy.log($el.text())
        })
    })
})