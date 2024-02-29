/// <reference types="cypress" />

describe('Validações <Header>', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('deve verificar moeda', () => {
    cy.get('div > div.pull-left').first().find('.btn-group > button').click()
    cy.get('div.open li').first().should('contain','Real')
    cy.get('div.open li').eq(1).click()
    cy.get('div > div.pull-left').first().find('.btn-group > button').should('contain','$')
  })
})