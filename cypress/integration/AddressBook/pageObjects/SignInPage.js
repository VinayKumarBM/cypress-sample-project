const object = require("./ObjectRepository.json");

export default class SignInPage{
    
    email() {
        return cy.get(object.SignInPage.emailTextbox)
    }

    password() {
        return cy.get(object.SignInPage.passwordTextbox)
    }

    signInButton() {
        return cy.get(object.SignInPage.signInButton)
    }

    singUpLink() {
        return cy.contains(object.SignInPage.signUpLink)
    }
}