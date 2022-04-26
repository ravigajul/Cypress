declare namespace Cypress {
    interface Chainable<Subject> {
      fnPad(n:any): Chainable<any>
    }
  }