import AddressesDetailsPage from "../pageObjects/AddressesDetailsPage";

const addressesDetailsPage = new AddressesDetailsPage()

export default class AddressesDetailsPageAction {

    validateAddressDetails(address) {
        addressesDetailsPage.addressDetailsColumn().then(col => {
            expect(address.firstName).equal(col.eq(0).text().trim(), 'First Name')
            expect(address.lastName).equal(col.eq(1).text().trim(), 'Last Name')
            expect(address.address1).equal(col.eq(2).text().trim(), 'Street Address')
            expect(address.address2).equal(col.eq(3).text().trim(), 'Secondary Address')
            expect(address.city).equal(col.eq(4).text().trim(), 'City')
            expect(address.stateDisplay).equal(col.eq(5).text().trim(), 'State')
            expect(address.zipCode).equal(col.eq(6).text().trim(), 'Zip code')
            expect(address.country).equal(col.eq(7).text().trim(), 'Country')
            expect(address.dobDisplay).equal(col.eq(8).text().trim(), 'Birthday')
            expect(address.age).equal(col.eq(10).text().trim(), 'Age')
            expect(address.website).equal(col.eq(11).text().trim(), 'Website')
            expect(address.phone).equal(col.eq(12).text().trim(), 'Phone number')
            expect(address.hobby.climbing).equal(col.eq(13).text().trim(), 'Climbing')
            expect(address.hobby.dancing).equal(col.eq(14).text().trim(), 'Dancing')
            expect(address.hobby.reading).equal(col.eq(15).text().trim(), 'Reading')
            expect(address.note).equal(col.eq(16).text().trim(), 'Note')
        })
    }

    clickListLink() {
        addressesDetailsPage.listLink().click()
    }

    validateTextMessage(message) {
        addressesDetailsPage.messageText().should('have.text', message)
    }

}