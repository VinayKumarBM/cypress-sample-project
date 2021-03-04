class HomePage{

    open() {
        cy.visit('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    }

    get managerLoginButton() {
        return cy.contains('Bank Manager Login')
    }

    get customerLoginButton() {
        return cy.contains('Customer Login')
    }

    get homeButton() {
        return cy.contains('Home')
    }
}

const homePage = new HomePage()
export default homePage