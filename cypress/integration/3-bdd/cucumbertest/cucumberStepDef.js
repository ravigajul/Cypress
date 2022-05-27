import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://example.cypress.io/todo'
Given('I open cypress example page', () => {
  cy.visit(url)
})

When('I add new todo items',()=>{
    const newItem = 'Feed the cat'
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
})

Then('I validate if the new item is added',()=>{
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', 'Feed the cat')
})

And('I retrieve the newly added item',()=>{
  const newItem = 'Feed the cat'
  cy.get('ul.todo-list label').eq(2) //getting the second item from the list
  .should('have.text','Feed the cat')
})

And('I retrive the property by invoke methd',()=>{
  cy.get('input.new-todo').invoke('prop','placeholder').should('contain','What needs to be done?')
 
})

And('I validate using wrap methd {string}',(name)=>{
  cy.get('ul.todo-list li').each(listItem=>{
    const itemText=listItem.text()
    cy.wrap(listItem).first().should('have.text',itemText)
    cy.log(name)
  })
})