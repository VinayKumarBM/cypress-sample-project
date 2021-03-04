const object = require("./ObjectRepository.json");

export default class EditAddressPage {

    firstNameTextField() {
        return cy.get(object.EditAddressPage.firstNameInputbox)
    }

    lastNameTextField() {
        return cy.get(object.EditAddressPage.lastNameInputbox)
    }

    cityTextField() {
        return cy.get(object.EditAddressPage.cityInputbox)
    }

    stateDropdown() {
        return cy.get(object.EditAddressPage.stateDropdown)
    }

    countryRadioButton() {
        return cy.get(object.EditAddressPage.countryRadioButton)
    }

    climbingXpath() {
        return object.EditAddressPage.climbingXpath
    }

    readingXpath() {
        return object.EditAddressPage.readingXpath
    }

    dancingXpath() {
        return object.EditAddressPage.dancingXpath
    }

    noteTextarea() {
        return cy.get(object.EditAddressPage.noteTextarea)
    }

    updateAddressButton() {
        return cy.contains(object.EditAddressPage.updateAddressButton)
    }
}