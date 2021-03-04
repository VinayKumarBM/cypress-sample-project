const object = require("./ObjectRepository.json");

export default class HomePage{

    open() {
        cy.visit('/')        
    }   

    signInLink() {
        return cy.contains(object.HomePage.signInLink)
    }

    welcomeMessage() {
        return cy.get(object.HomePage.welcomeText)
    }

    currentUser() {
        return cy.get(object.HomePage.currentUser)
    }

    addressesLink() {
        return cy.get(object.HomePage.addressesLink)
    }

    signOutLink() {
        return cy.contains(object.HomePage.signOutLink)
    }
}