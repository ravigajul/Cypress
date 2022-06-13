import { cyan, italic } from "colorette"

describe('Get Vs Find Vs Contains',()=>{
    it('test to show difference between get find nd contains',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    })
})