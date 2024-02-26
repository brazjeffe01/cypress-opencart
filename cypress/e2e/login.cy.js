// <reference types="cypress" />

describe('should validade de login page functionalities', () => {
  before(() => {
    cy.visit('/index.php?route=account/login')
    cy.efetuarLogin()
  })
    it('should validate the login page ', () => {
      cy.url().should('contain','account/account')
    })
  })