import HomePage from "../pageObjects/HomePage";
import SignInPage from "../pageObjects/SignInPage";
import SignUpPage from "../pageObjects/SignUpPage";

const homePage = new HomePage()
const signInPage = new SignInPage()
const signUpPage = new SignUpPage()

export default class LoginPageAction{

    launchApplication() {
        homePage.open()
    }

    login(email, password) {
        homePage.signInLink().click()
        signInPage.email().type(email)
        signInPage.password().type(password)
        signInPage.signInButton().click()
    }

    validateLoginMessage(message) {
        homePage.welcomeMessage().should('have.text', message)
    }

    validateLoggedInUser(email) {
        homePage.currentUser().should('have.text', email)
    }

    navigateToAddressesPage() {
        homePage.addressesLink().click()
    }

    signOut() {
        homePage.signOutLink().click()
        homePage.signOutLink().should('not.exist')
    }

    navigateToSignUpPage() {
        homePage.signInLink().click()
        signInPage.singUpLink().click()
    }

    signUp(email, password) {
        signUpPage.email().type(email)
        signUpPage.password().type(password)
        signUpPage.signUpButton().click()
    }
}