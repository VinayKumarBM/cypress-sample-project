import SignInPageAction from "../pageActions/SignInPageAction";
import AddressDetailsPageAction from "../pageActions/AddressDetailsPageAction";

describe('to tests the sign in functionality', () => {
    const signInPageAction = new SignInPageAction()
    const addressDetailsPageAction = new AddressDetailsPageAction()

    beforeEach('launch the address book app', () => {
        cy.fixture('address.json').its('address').then(data => {
            globalThis.testData = data
        })
        signInPageAction.launchApplication()
    })

    it('login with valid credentials and sign out', () => {
        signInPageAction.login(Cypress.config('userName'), Cypress.config('password'))
        signInPageAction.validateLoginMessage(testData.welcomeMessage)
        signInPageAction.signOut()
    });

    it('login with invalid credentials', () => {
        signInPageAction.login('test321@yahoo.com', 'test123')
        addressDetailsPageAction.validateTextMessage(testData.loginError)
    });
});