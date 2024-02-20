/// <reference types="cypress" />

describe('First steps', () => {
  it('should access the opencart home page ', () => {
    cy.visit('/')
    cy.url().should('contain','opencart')
  })
})