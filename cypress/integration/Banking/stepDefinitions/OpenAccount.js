import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import openAccountPage from "../pageObjects/OpenAccountPage"

When('user selects customer {string} with currency {string} to open an account', (customer, currency) => {
    openAccountPage.openAccount.click()
    openAccountPage.customerDropdown.select(customer).find('option:selected').should('have.text', customer)
    openAccountPage.currencyDropdown.select(currency).find('option:selected').should('have.text', currency)
})

Then('user should see the message {string} on processing the details', (message) => {
    openAccountPage.processButton.click()
    cy.on('window:alert', (txt) => {
        expect(txt).to.contains(message);
    })
})
