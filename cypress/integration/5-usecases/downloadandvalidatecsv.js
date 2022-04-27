import { italic } from "colorette"
import neatCSV from "neat-csv"
describe('This it download and validate csv file',()=>{
    it('To test the csv download functionality',()=>{
        cy.visit('cypress/TestPage.html')
        cy.get('button').click()
        Cypress.config('fileServerFolder')
        cy.wait(3000)
        cy.readFile(Cypress.config('fileServerFolder')+ '/cypress/downloads/person.csv').then(async text=>{
            const csv=await neatCSV(text);
            csv.forEach(row => {
                console.log(row[2])
            });
        })
    })
})