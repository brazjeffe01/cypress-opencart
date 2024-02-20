
class Login {
    
    preencherLoginSenha() {

        cy.fixture('login').as('dados-login')
        cy.get('@dados-login').then((dados) => {
            
        })
    }
}

export default new Login()