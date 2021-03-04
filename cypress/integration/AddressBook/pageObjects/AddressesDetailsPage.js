const object = require("./ObjectRepository.json");

export default class AddressesDetailsPage {

    listLink() {
        return cy.contains(object.AddressDetailsPage.listLink)
    }

    messageText() {
        return cy.get(object.AddressDetailsPage.messageText)
    }

    addressDetailsColumn() {
        return cy.get(object.AddressDetailsPage.addressDetailsColumn)
    }
}