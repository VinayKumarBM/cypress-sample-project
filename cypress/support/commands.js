// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('login', (userName, password) => {
  cy.get('#session_email').type(userName);
  cy.get('#session_password').type(password);
  cy.get('input[type="submit"]').click();
})

Cypress.Commands.add('getFrame', { prevSubject: 'element' }, $iframe => {
  return new Cypress.Promise(resolve => {
    $iframe.ready(function () {
      resolve($iframe.contents().find('html'));
    });
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Commands.add('updateCheckbox', (locator, status) => {
  if (status === 'Yes') {
    cy.xpath(locator).check().should('be.checked')
  } else {
    cy.xpath(locator).uncheck().should('not.be.checked')
  }
})