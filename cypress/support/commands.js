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

Cypress.Commands.add('efetuarLogin', () => {
    cy.fixture('login').as('dados-login')
    cy.get('@dados-login').then((dados) => {
        cy.get('#input-email').should('have.attr','placeholder','E-mail').type(dados.login)
        cy.get('#input-password').should('have.attr','placeholder','Senha').type(dados.passwd)
    })
    cy.get("input[type='submit']").should('have.class','btn-primary').click()
    cy.get('ul.list-inline > li').contains('Minha conta')
})