// <reference types="cypress" />

import login from "../support/pages/login"

describe('should validade de login page functionalities', () => {
    it('should access the login page ', () => {
      cy.visit('/index.php?route=account/login')
      cy.url().should('contain','account/login')
      login.preencherLoginSenha()
      login.validarLogin()
    })
  })