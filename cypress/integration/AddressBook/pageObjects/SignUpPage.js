const object = require("./ObjectRepository.json");

export default class SignInPage{
    
    email() {
        return cy.get(object.SignUpPage.emailTextbox)
    }

    password() {
        return cy.get(object.SignUpPage.passwordTextbox)
    }

    signUpButton() {
        return cy.get(object.SignUpPage.signUpButton)
    }
}