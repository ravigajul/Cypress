# Cypress
## Check for node js installation
 1. node -v
 2. npm -v
## Install depedencies
This will download all the dev-dependencies from package.json
 ```
 npm install
```
## Start the test application
  ```
  npm start
 ```
## Cypress installation & save the cypress as dev dependency in package.json  
  ```
  npm install cypress --save-dev 
  ```
## Open Cypress Runner
 //installs a new folder cypress in root directory that has project folder structure with examples
 ```
   npx cypress open
 ```
  1. downloads 
  2. fixtures  //test data objects (json files most of the cases)
  3. integration  //main folder where the tests or specs are present
  4. Plugins
  5. support 
  6. cypress.json //configuration files for changing default settings for cypress
## ignore default examples
 add the below lines in cypress.json
 ```
 {
    "baserurl":"http://localhost:4200/",
    "ignoreTestFiles":["**/1-getting-started/*", "**/2-advanced-examples/*"],
    "viewportHeight":786,
    "viewportWidth":1024
}
```
## Starting point
  under support --> index.js is the first file that the cypress looks at
## Create First Test
add a file under folder integration with extension .spec.js
ex : firstTest.spec.js
## Test.spec.js Structure
reference types below allows vscode to support intellisense
```
///<reference types = "cypress"/>
describe('first test suite',()=>{
    //nested describe is okay and allowed
    beforeEach('code to run before every it',()=>{
        //login functionality for example
    })
    it('first test',()=>{
        //some test code
    })

    it('second test',()=>{
        //some test code
    })
})

describe('Second test suite',()=>{
    beforeEach('code to run before every it',()=>{
        //login functionality for example
    })
    it('first test',()=>{
        //some test code
    })

    it('second test',()=>{
        //some test code
    })
})
```
## Locators
Cypress doesn have xpath as selector. It uses J-Query. We can optionally use xpath plugin for cypress to support xpath
## Different ways of locating elements
1. cy.get(<css>)
2. cy.find(<css>)
3. cy.contains(<css>) or cy.contains(<css>,<css>)
## Run specific test
```
it.only('second test',()=>{
//some test
})
```
## Element location using parent child concept
Parents method is to navigate to parent element from current element and find method is to locate child from that parent element
```
cy.get('#inputEmail3')
    .parents('form')
    .find('button')
```
#Invoke method
```
        //method1
        cy.get('[for="inputEmail1"]').should('contain','Email')
        
        //method2
        cy.get('[for="inputEmail1"]').then(label=>{
            expect(label.text()).to.equal('Email')
        })

        //method3
        cy.get('[for="inputEmail1"]').invoke('text').then(text=>{
            expect(text).to.equal('Email')
        })
        
        //method4 to check if the check box is checked
        cy.contains('nb-card','Horizontal form').find('nb-checkbox').click()
        .find('.custom-checkbox')
        .invoke('attr','class')
        .should('contain','checked')
   ```
# Install cypress-cucumber-preprocessor
1. https://www.npmjs.com/package/cypress-cucumber-preprocessor
2. Add cypress configuration in cypress/plugins/index.js
3. create a configuration for plugin by adding cypress-cucumber-preprocessor to package.json
4. 3.1. The .feature file will use steps definitions from a directory with the same name as your .feature file.
5. Execute the cucumber feature like in a similar way by opening cypress runner  npx cypress open

# Retrieve the elements based on index
```
  const newItem = 'Feed the cat'
  cy.get('ul.todo-list label').eq(2) //getting the second item from the list
  .should('have.text','Feed the cat')

```
# Retrieve the property value similar to getAttribute or getROProperty
```
cy.get('input.new-todo').invoke('prop','placeholder').should('contain','What needs to be done?')
  
```
# Wrap method
cy.wrap is used for switching context from JQuery format to Cypress format.
```
```

## Add cucumber-html-report
 1. add the below dependency in package.json
    ```
    "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "cucumberJson": {
      "generate": true,
      "outputFolder": "./",
      "filePrefix": "",
      "fileSuffix": ".cucumber"
    }
    ```
 2. npm install --save-dev multiple-cucumber-html-reporter
 3. Create a cucumber-html-report.js
 4. Run after feature or in after hooks node ./cucumber-html-reporter.js 
