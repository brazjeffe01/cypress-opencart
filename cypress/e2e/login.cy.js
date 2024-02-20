// <reference types="cypress" />

describe('should validade de login page functionalities', () => {
    it('should access the login page ', () => {
      cy.visit('/index.php?route=account/login')
      cy.url().should('contain','account/login')
    })
  })