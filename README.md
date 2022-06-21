# Cypress

1. Cypress will wait for the state of element to be stable before it actually performs any operation on an element.
2. The default timeout is 4 seconds and it can be reconfigured to any other value.
3. Can perform the operations on hidden element by forcing the operation.
4. Has the ability to mock server responses by intercepting the API calls in network layer.
5. Report automatically takes the snapshots for before and after an operatoin is performed.
6. Can view videos of entire test execution when run from cypress dashboard.
7. Supports Chrome, Edge , Fireforx & Electron
8. Browser is executing the test and no proxy servers like driver server in selenium
9. By default, when running cypress run from the CLI, we will launch all browsers headlessly.
10. cypress run --headed //for headed mode. alternatively npx cypress open
11. cypress run --browser chrome

## Check for node js installation

 1. node -v
 2. npm -v

## Install depedencies

This will download all the dev-dependencies from package.json

 ```javascript
 npm install
```

## Start the test application

  ```javascript
  npm start
 ```

## Cypress installation & save the cypress as dev dependency in package.json  

  ```javascript
  npm install cypress --save-dev 
  ```

## Open Cypress Runner

 //installs a new folder cypress in root directory that has project folder structure with examples

 ```javascript
   npx cypress open
 ```

  1. downloads
  2. fixtures  //test data objects (json files most of the cases)
  3. integration  //main folder where the tests or specs are present
  4. Plugins //kind of listeners. config for listeners
  5. support //reusable utilities in command.js inside this
  6. vidoes //for saving the vidoes captured during execution.
  7. cypress.json //configuration files for changing default settings for cypress

## ignore default examples

 add the below lines in cypress.json

 ```json
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

```javascript
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

1. cy.get(css)
2. cy.find(css)
3. cy.contains(css) or cy.contains(css1,css2)

## Run specific test

```javascript
it.only('second test',()=>{
//some test
})
```

## Element location using parent child concept

Parents method is to navigate to parent element from current element and find method is to locate child from that parent element

```javascript
cy.get('#inputEmail3')
    .parents('form')
    .find('button')
```

## Invoke method

```javascript
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

## Install cypress-cucumber-preprocessor

1. <https://www.npmjs.com/package/cypress-cucumber-preprocessor>
2. Add cypress configuration in cypress/plugins/index.js
3. create a configuration for plugin by adding cypress-cucumber-preprocessor to package.json
4. 3.1. The .feature file will use steps definitions from a directory with the same name as your .feature file.
5. Execute the cucumber feature like in a similar way by opening cypress runner  npx cypress open

## Retrieve the elements based on index

```javascript
  const newItem = 'Feed the cat'
  cy.get('ul.todo-list label').eq(2) //getting the second item from the list
  .should('have.text','Feed the cat')

```

## Retrieve the property value similar to getAttribute or getROProperty

```javascript
cy.get('input.new-todo').invoke('prop','placeholder').should('contain','What needs to be done?')
  
```

## Wrap method

cy.wrap is used for switching context from JQuery format to Cypress format.

```javascript
  cy.visit('https://example.cypress.io/utilities')
        cy.get('a.dropdown-toggle').click()
        cy.get('ul.dropdown-menu').find('li a').each(($el,index,$list)=>{
            cy.wrap($el).invoke('prop','innerText').then(text=>{
                cy.log(text)
            })
        })
```

## Add cucumber-html-report

 1. add the below dependency in package.json

    ```config
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

## Add custom command

 Add a custom command to commands.js under support folder. This accessible everywhere in the project

 ```javascript
 Cypress.Commands.add('fnPad',(n)=>{
    return (n<10?"0"+n:n)
})
```

## .get vs .find vs .contains

 .get the scope of this method is to search the entire page
 .find will narrow down the scope and only searches within the descendant dom received by get
 .contains will look for the text within that narrowed scope

```javascript
 cy.get('.products').get('.product').eq(2).contains('ADD TO CART').click()
 ```

Narrowing down the scope to list of products and then to just product and get second third element with index 2 and look for contains text and click it.

## conditional test

 ```javascript
 cy.get('body').then(($body) => {
    // synchronously ask for the body's text
    // and do something based on whether it includes
    // another string
    if ($body.text().includes('some string')) {
      // yup found it
      cy.get(...).should(...)
    } else {
      // nope not here
      cy.get(...).should(...)
    }
  })
 ```

## Looping to array of elements using each

 <https://docs.cypress.io/api/commands/each#DOM-Elements>

 ```javascript
  cy.visit('https://example.cypress.io/utilities')
        cy.get('a.dropdown-toggle').click()
        cy.get('ul.dropdown-menu').find('li a').each(($el,index,$list)=>{
            cy.wrap($el).invoke('prop','innerText').then(text=>{
                cy.log(text)
            })
        })
 ```

## Logging to cypress runner

 cy.log is a cypress command and is synchronous in nature. However console.log is javascript command and is not synchronous ..this needs to be put in .then to make it sync.

 ```javascript
 cy.log('your message')
 ```

## Aliasing

 aliasing so that same css selector is not used in multiple lines of parent.

```javascript
cy.get('.products').as('productsLocator')
cy.get('@productsLocator').find('').
cy.get('@productsLocator').find('').
```

## working with iframes

 install and import cypress-iframe to work with iframes

## Set env variable

 ```javascript
 Cypress.env('token',response.body.access_token) //set environment variable
 Cypress.env('token') //get environment variable.
 ````

## callback

 ```javascript
 //This printS undefined as the fnAdd is not returning anything but setTimeout
 const fnAdd =(a,b)=>{
    setTimeout(()=>{
        return a+b
    },2000)
}
console.log('The sume of numbers is ' + fnAdd(3,5)) */

//Address the undefined return by using callback
const fnAdd =(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}
fnAdd(3,5,(x)=>{
    console.log('The sume of numbers is ' + x)
})
```

## Debug

 1. Add 'debugger' keyword before the line of code from where you want to debug.
 2. The console shows the port number, Open the browser with ip and port number
 3. navigate to developer tools to debug further. use chrome://inspect and click inspect
 4. We can add folder on the dev tools opened and see console by clicking esc
 5. Run the node command with inspect

 ```javascript
 node inspect ./test.js
 ```

use this if there is error

```javascript
 node --inspect-brk ./test.js
```

6.enter restart in the terminal if you want to debug again.

## Display custom command in intellisense

Add the below code to index.d.ts file in support folder.

```json
declare namespace Cypress {
    interface Chainable<Subject> {
      fnPad(n:any): Chainable<any>
    }
  }
```

for more info on this refer to -<https://github.com/cypress-io/cypress-example-todomvc#cypress-intellisense>

## Yesterday date in YYYY-MM-DD format

```javascript
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
console.log(yesterday.toLocaleDateString('en-CA'))
```

## Use {force:true} when the element is hidden

```javascript
cy.get('#signInFormUsername', { timeout: 10000 }).eq(0)
  .type('userName', { force: true })
```

## Pause and Resume

 cy.pause() to pause the test and click play button on runner to resume.

## Accessing a json property that has space

```json
 json.body[0].["Property name"]
 ```

## Getting the root folder dynamically

```javascript
Cypress.config("fileServerFolder")

```

## Reading the data from csv file

1. install neat-csv dependency version 5.1.0
2. import neatCSV from "neat-csv"
3. Read the csv file and access its properties.
4. on click the button of Testhtml page, the csv will be downloaded to cypress/downloads folder
5. access project directory through Cypress.config("fileServerFolder")

```javascript

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
```

## Solve - Unexpected reserved word 'await' Error

The "unexpected reserved word await" error occurs when the await keyword is used inside of a function that was not marked as async. To use the await keyword inside of a function, mark the directly enclosing function as async.

## JQuery vs Cypress elements

```javascript
 it('Cypress get inner text example',()=>{
        cy.visit('https://example.cypress.io/utilities')
        cy.get('a.dropdown-toggle').click()
        cy.get('ul.dropdown-menu').find('li a').each(($el,index,$list)=>{
          //cy.wrap($el) is a cypress element
            cy.wrap($el).invoke('prop','innerText').then(text=>{
                cy.log(text)
            })
        })
    })

    it('Jquery get inner text example',()=>{
        cy.visit('https://example.cypress.io/utilities')
        cy.get('a.dropdown-toggle').click()
        cy.get('ul.dropdown-menu').find('li a').each(($el,index,$list)=>{
          //jquery element and .text() is jQuery method
            cy.log($el.text())
        })
    })
```

## Alerts

Cypress will auto accept the alerts. We can fire the window:alert event to get the string in the alert window.

```javascript
//getting text from alert window by invoking the window:alert event
cy.on('window:alert',(str)=>{
            cy.log(str)
        })
```

## Validating text from alerts window

```javascript
const stub = cy.stub()
cy.on('window:alert',stub)
cy.get('input#alertbtn').click().then(()=>{
expect(stub.getCall(0)).to.be.calledWith('Hello , share this practice page and share your knowledge')
})
```

for more info see the below link
<https://docs.cypress.io/api/events/catalog-of-events#Window-Alert>

## Handling pages that open in new tab

cypress sugggests removal of target=_blank attribute by using removeAttr in invoke command so that the page open in same tab instead of new tab.

```javascript
cy.get('#newtab').invoke('removeAttr','target').click()
```

## Browser Navigation

```javascript
cy.go('back')
cy.go('forward')
```

## WebTable Navigation

```javascript
cy.get('table#product tr').find('td').each(($el,index,$list)=>{
cy.log($el.text())
})
```
## Parse locale String to Integer

```javascript
var number =1849
console.log(number) //1849

//locale string
var strWithCommas = number.toLocaleString("en-US")
console.log(strWithCommas) //1,849

//string without commas
var strWithouCommas=strWithCommas.replace(/\D/g,'')
console.log(strWithouCommas) //1849

//number
console.log(parseInt(strWithouCommas)) //1849
```
