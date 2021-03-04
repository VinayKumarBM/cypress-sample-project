import EditAddressPage from "../pageObjects/EditAddressPage";

const editAddressPage = new EditAddressPage()

export default class EditAddressPageAction {

    editAddressDetails(address) {
        editAddressPage.firstNameTextField().clear().type(address.firstName)
        editAddressPage.lastNameTextField().clear().type(address.lastName)
        editAddressPage.cityTextField().clear().type(address.city)
        editAddressPage.stateDropdown().select(address.state)
        editAddressPage.stateDropdown().find('option:selected').should('have.text', address.state)
        editAddressPage.countryRadioButton().check(address.country)
        cy.updateCheckbox(editAddressPage.climbingXpath(), address.hobby.climbing)
        cy.updateCheckbox(editAddressPage.dancingXpath(), address.hobby.dancing)
        cy.updateCheckbox(editAddressPage.readingXpath(), address.hobby.reading)
        editAddressPage.noteTextarea().clear().type(address.note)
    }

    updateAddressDetails() {
        editAddressPage.updateAddressButton().click();
    }
}