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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit('http://notes-serverless-app.com')

    cy.get('.navbar-nav a:contains(Login)').click()

    cy.get('#email').type('laraoliveira2435@gmail.com')
    cy.get('#password').type('Lara2435@')
    cy.get('button[type="submit"]').click()
  });

Cypress.Commands.add('createsANote', (note) => {
    cy.contains('Create a new note').click()
    cy.get('#content').type(note)
    cy.contains('Create').click()
});

Cypress.Commands.add('editsANote', (note, updateNote) => {
    cy.get('.list-group').contains(note).click()
    cy.get('#content').type(updateNote)
    cy.contains('Save').click()
});

Cypress.Commands.add('deletesANote', (noteUpdate) => {
    cy.get('.list-group').contains(noteUpdate).click()
    cy.contains('Delete').click()
});
