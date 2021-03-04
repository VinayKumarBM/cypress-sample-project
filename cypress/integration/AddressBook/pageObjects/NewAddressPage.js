const object = require("./ObjectRepository.json");

export default class NewAddressPage {

    firstNameTextField() {
        return cy.get(object.NewAddressPage.firstNameInputbox)
    }

    lastNameTextField() {
        return cy.get(object.NewAddressPage.lastNameInputbox)
    }

    address1TextField() {
        return cy.get(object.NewAddressPage.address1Inputbox)
    }

    address2TextField() {
        return cy.get(object.NewAddressPage.address2Inputbox)
    }

    cityTextField() {
        return cy.get(object.NewAddressPage.cityInputbox)
    }

    stateDropdown() {
        return cy.get(object.NewAddressPage.stateDropdown)
    }

    zipCodeTextField() {
        return cy.get(object.NewAddressPage.zipCodeInputbox)
    }

    countryRadioButton() {
        return cy.get(object.NewAddressPage.countryRadioButton)
    }

    birthdate() {
        return cy.get(object.NewAddressPage.dob)
    }

    ageTextField() {
        return cy.get(object.NewAddressPage.ageInputbox)
    }

    websiteTextField() {
        return cy.get(object.NewAddressPage.websiteInputbox)
    }

    picture() {
        return cy.get(object.NewAddressPage.picture)
    }

    phoneTextField() {
        return cy.get(object.NewAddressPage.phoneInputbox)
    }

    climbingCheckbox() {
        return cy.xpath(object.NewAddressPage.climbingCheckbox)
    }

    readingCheckbox() {
        return cy.xpath(object.NewAddressPage.readingCheckbox)
    }

    dancingCheckbox() {
        return cy.xpath(object.NewAddressPage.dancingCheckbox)
    }

    noteTextarea() {
        return cy.get(object.NewAddressPage.noteTextarea)
    }

    createAddressButton() {
        return cy.contains(object.NewAddressPage.createAddressButton)
    }

    errorMessageHeading() {
        return cy.get(object.NewAddressPage.errorMessage)
    }

    firstNameErrorMessage() {
        return cy.get(object.NewAddressPage.firstNameError)
    }

    lastNameErrorMessage() {
        return cy.get(object.NewAddressPage.lastNameError)
    }

    addressErrorMessage() {
        return cy.get(object.NewAddressPage.addressError)
    }

    cityErrorMessage() {
        return cy.get(object.NewAddressPage.cityError)
    }

    zipErrorMessage() {
        return cy.get(object.NewAddressPage.zipError)
    }
}