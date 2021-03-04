import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import homePage from "../pageObjects/HomePage"
import addCustomerPage from "../pageObjects/AddCustomerPage"

Given('user is logged in as Bank Manager to Bank application', () => {
    homePage.open()
    homePage.managerLoginButton.click()
})

When('user enters the customer details', (datatable) => {
    addCustomerPage.addCustomer.click()
    datatable.hashes().forEach(row => {
        addCustomerPage.firstNameTextfield.clear().type(row.firstName)
        addCustomerPage.lastNameTextfield.clear().type(row.lastName)
        addCustomerPage.postalCodeTextfield.clear().type(row.postalCode)
    })
})

Then('user should see the message {string} on saving the details', (message) => {
    addCustomerPage.addCustomerButton.click()
    cy.on('window:alert', (txt) => {
        expect(txt).to.contains(message);
    })
})

And('user returns to home page', () => {
    homePage.homeButton.click()
    homePage.managerLoginButton.should('exist')
})
