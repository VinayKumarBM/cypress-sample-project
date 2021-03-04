class LoginPage{

    get customerNameDropdown() {
        return cy.get('#userSelect')
    }

    get loginButton(){
        return cy.contains('Login')
    }

    get customerNameText() {
        return cy.get('.fontBig')
    }
    get logoutButton() {
        return cy.contains('Logout')
    }
}

const loginPage = new LoginPage()
export default loginPage