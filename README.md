# Cypress
## Check for node js installation
 1. node -v
 2. npm -v
## Install depedencies
  npm install ..This will download all the dev-dependencies from package.json
## Start the test application
  npm start
## Cypress installation
  npm install cypress --save-dev //install & save the cypress as dev dependency in package.json  
## Open Cypress Runner
  npx cypress open //installs a new folder cypress in root directory that has project folder structure with examples
  1. downloads 
  2. fixtures  //test data objects (json files most of the cases)
  3. integration  //main folder where the tests or specs are present
  4. Plugins
  5. support 
  6. cypress.json //configuration files for changing default settings for cypress
## Starting point
  under support --> index.js is the first file that the cypress looks at
