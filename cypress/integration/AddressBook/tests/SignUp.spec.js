import SignInPageAction from "../pageActions/SignInPageAction";
import AddressDetailsPageAction from "../pageActions/AddressDetailsPageAction";

describe('to tests the sign up functionality', () => {
    const signInPageAction = new SignInPageAction()

    beforeEach('launch the address book app', () => {
        cy.fixture('address.json').its('address').then((data) => {
            globalThis.testData = data
        })
        signInPageAction.launchApplication()
        signInPageAction.navigateToSignUpPage()
    })

    it('Sign up with valid data', () => {
        let time = new Date().getTime()
        signInPageAction.signUp('test_' + time + '@yahoo.com', Cypress.config('password'))
        signInPageAction.validateLoginMessage(testData.welcomeMessage)
        signInPageAction.signOut()
    });
});