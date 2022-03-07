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
