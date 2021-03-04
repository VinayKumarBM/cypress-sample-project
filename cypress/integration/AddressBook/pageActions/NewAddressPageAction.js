import NewAddressPage from "../pageObjects/NewAddressPage";

const newAddressPage = new NewAddressPage()

export default class NewAddressPageAction {

    enterNewAddressDetails(address) {
        newAddressPage.firstNameTextField().type(address.firstName)
        newAddressPage.lastNameTextField().type(address.lastName)
        newAddressPage.address1TextField().type(address.address1)
        newAddressPage.address2TextField().type(address.address2)
        newAddressPage.cityTextField().type(address.city)
        newAddressPage.stateDropdown().select(address.state)
        newAddressPage.stateDropdown().find('option:selected').should('have.text', address.state)
        newAddressPage.zipCodeTextField().type(address.zipCode)
        newAddressPage.countryRadioButton().check(address.country)
        newAddressPage.birthdate().type(address.dob)
        newAddressPage.ageTextField().type(address.age)
        newAddressPage.websiteTextField().type(address.website)
        newAddressPage.picture().attachFile(address.picture)
        newAddressPage.phoneTextField().type(address.phone)
        if (address.hobby.climbing === 'Yes') {
            newAddressPage.climbingCheckbox().check().should('be.checked')
        }
        if (address.hobby.dancing === 'Yes') {
            newAddressPage.dancingCheckbox().check().should('be.checked')
        }
        if (address.hobby.reading === 'Yes') {
            newAddressPage.readingCheckbox().check().should('be.checked')
        }
        newAddressPage.noteTextarea().type(address.note)
    }

    createNewAddress() {
        newAddressPage.createAddressButton().click();
    }

    validateErrorHeading(errorHeading) {
        newAddressPage.errorMessageHeading().should('have.text', errorHeading)
    }

    validateFirstNameErrorMessage(errorMessage) {
        newAddressPage.firstNameErrorMessage().should('have.text', errorMessage)
    }

    validateLastNameErrorMessage(errorMessage) {
        newAddressPage.lastNameErrorMessage().should('have.text', errorMessage)
    }

    validateAddressErrorMessage(errorMessage) {
        newAddressPage.addressErrorMessage().should('have.text', errorMessage)
    }

    validateCityErrorMessage(errorMessage) {
        newAddressPage.cityErrorMessage().should('have.text', errorMessage)
    }

    validateZipErrorMessage(errorMessage) {
        newAddressPage.zipErrorMessage().should('have.text', errorMessage)
    }
}