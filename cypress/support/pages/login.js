/// <reference types="cypress" />

class Login {
    
    preencherLoginSenha() {

        cy.fixture('login').as('dados-login')
        cy.get('@dados-login').then((dados) => {
            cy.get('#input-email').should('have.attr','placeholder','E-mail').type(dados.login)
            cy.get('#input-password').should('have.attr','placeholder','Senha').type(dados.passwd)
        })
        cy.get("input[type='submit']").should('have.class','btn-primary').click()
        
    }
}

export default new Login()