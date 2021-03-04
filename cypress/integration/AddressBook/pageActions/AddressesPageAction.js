import AddressesPage from "../pageObjects/AddressesPage";

const addressesPage = new AddressesPage()

export default class AddressesPageAction {

    validateAddressOnAddressList(address) {
        addressesPage.getLastAddressRow().then((cell) => {
            expect(address.firstName).equal(cell.eq(0).text(), 'First Name')
            expect(address.lastName).equal(cell.eq(1).text(), 'Last Name')
            expect(address.city).equal(cell.eq(2).text(), 'City Name')
            expect(address.stateDisplay).equal(cell.eq(3).text(), 'State Name')
            expect('Show').equal(cell.eq(4).text(), 'Show link text')
            expect('Edit').equal(cell.eq(5).text(), 'Edit link text')
            expect('Destroy').equal(cell.eq(6).text(), 'Delete link text')
        })
    }

    validateTextMessage(message) {
        addressesPage.messageText().should('have.text', message)
    }

    clickNewAddressLink() {
        addressesPage.newAddressLink().click()
    }

    clickShowAddressDetails() {
        addressesPage.lastRowShowLink().click()
    }

    clickEditAddressDetails() {
        addressesPage.lastRowEditLink().click()
    }

    validateHeadingText(heading) {
        addressesPage.headingText().should('have.text', heading)
    }

    deleteAllAddresses(message) {
        let len = Cypress.$(addressesPage.destroyLinks()).length
        cy.log('Number of Addresses to delete: ' + len)
        for (let index = len; index > 0; index--) {
            addressesPage.destroyLinksXpath(index).click()
            cy.on('window:confirm', (alertText) => {
                expect(alertText).to.equal('Are you sure?')
            })
            addressesPage.messageText().should('have.text', message)
        }
        cy.get(addressesPage.destroyLinks()).should('not.exist');
    }
}