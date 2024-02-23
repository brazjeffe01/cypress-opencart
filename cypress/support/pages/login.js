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

    validarLogin() {
        //cy.get("ul.list-inline > li > a.dropdown-toggle").should('have.attr','title','Minha conta')
        cy.get('ul.list-inline > li').contains('Minha conta')
    }
}

export default new Login()