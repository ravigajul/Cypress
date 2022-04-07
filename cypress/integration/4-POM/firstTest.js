import { actionsPage } from "../../support/pageobjects/actionsPage"
import { navigateTo } from "../../support/pageobjects/cypressNavigationPage"

describe('This is first page object model suite',()=>{
    beforeEach('this will be executed before each test',()=>{
        cy.visit('https://example.cypress.io/cypress-api')
    })
    it('This the first test',()=>{        
        navigateTo.menuItem('Utilities')
        navigateTo.menuItem('Cypress API')
        navigateTo.mainManu('cypress.io')
        navigateTo.CommandsSubItem('Actions')
        actionsPage.blurFullName()
        actionsPage.scroll()
    })
})