import SignInPageAction from "../pageActions/SignInPageAction";
import AddressesPageAction from "../pageActions/AddressesPageAction";
import EditAddressPageAction from "../pageActions/EditAddressPageAction";
import AddressDetailsPageAction from "../pageActions/AddressDetailsPageAction";
import NewAddressPageAction from "../pageActions/NewAddressPageAction";

describe('To tests the Address book functionality using external json file', () => {
    const signInPageAction = new SignInPageAction()
    const addressesPageAction = new AddressesPageAction()
    const editAddressPageAction = new EditAddressPageAction()
    const addressDetailsPageAction = new AddressDetailsPageAction()
    const newAddressPageAction = new NewAddressPageAction()

    before('setup test data', () => {
        cy.fixture('address.json').then(data => {
            globalThis.testData = data
        })
    })

    beforeEach('launch the address book app', () => {
        signInPageAction.launchApplication()
        signInPageAction.login(Cypress.config('userName'), Cypress.config('password'))
        signInPageAction.validateLoginMessage(testData.address.welcomeMessage)
        signInPageAction.validateLoggedInUser(Cypress.config('userName'))
        signInPageAction.navigateToAddressesPage()
        addressesPageAction.validateHeadingText(testData.address.heading)
    })

    it('validate the error message on New Address page', () => {
        addressesPageAction.clickNewAddressLink()
        newAddressPageAction.createNewAddress()
        newAddressPageAction.validateErrorHeading(testData.newAddress.errorHeading)
        newAddressPageAction.validateFirstNameErrorMessage(testData.newAddress.firstNameError)
        newAddressPageAction.validateLastNameErrorMessage(testData.newAddress.lastNameError)
        newAddressPageAction.validateAddressErrorMessage(testData.newAddress.addressError)
        newAddressPageAction.validateCityErrorMessage(testData.newAddress.cityError)
        newAddressPageAction.validateZipErrorMessage(testData.newAddress.zipError)
    });

    it('add an Address to Address Book using data from json file', () => {
        addressesPageAction.clickNewAddressLink()
        newAddressPageAction.enterNewAddressDetails(testData.newAddress)
        newAddressPageAction.createNewAddress()
        addressDetailsPageAction.validateTextMessage(testData.newAddress.successMessage)
        addressDetailsPageAction.clickListLink()
        addressesPageAction.validateHeadingText(testData.address.heading)
    });

    it('Validate the address details in address list using json file', () => {
        addressesPageAction.validateAddressOnAddressList(testData.newAddress)
    });

    it('Validate the details of the Address added using json file', () => {
        addressesPageAction.clickShowAddressDetails()
        addressDetailsPageAction.validateAddressDetails(testData.newAddress)
        addressDetailsPageAction.clickListLink()
        addressesPageAction.validateHeadingText(testData.address.heading)
    });

    it('Edit added Address using json file', () => {
        addressesPageAction.clickEditAddressDetails()
        editAddressPageAction.editAddressDetails(testData.updateAddress)
        editAddressPageAction.updateAddressDetails()
        addressDetailsPageAction.validateTextMessage(testData.updateAddress.successMessage)
        addressDetailsPageAction.clickListLink()
    });

    it('Validate the updated address details in address list using json file', () => {
        addressesPageAction.validateAddressOnAddressList(testData.updateAddress)
    });

    it('delete all the addresses using json file', () => {
        addressesPageAction.deleteAllAddresses(testData.address.deleteMessage)
    });
});