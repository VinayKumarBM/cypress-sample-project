const object = require("./ObjectRepository.json");

export default class AddressesPage{

    getLastAddressRow() {
        return cy.get(object.AddressesPage.lastAddressRow)
    }

    lastRowEditLink() {
        return cy.get(object.AddressesPage.editLastAddressLink)
    }

    lastRowShowLink() {
        return cy.get(object.AddressesPage.showLastAddressLink)
    }

    newAddressLink() {
        return cy.contains(object.AddressesPage.newAddressLink)
    }

    messageText() {
        return cy.get(object.AddressesPage.messageText)
    }

    headingText() {
        return cy.get(object.AddressesPage.headingText)
    }

    destroyLinks() {
        return object.AddressesPage.deleteLinks
    }

    destroyLinksXpath(index) {
        return cy.xpath(object.AddressesPage.deleteLinkXpath.replace('pos',index))
    }
}