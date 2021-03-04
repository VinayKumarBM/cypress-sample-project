import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import searchCustomerPage from "../pageObjects/SearchCustomerPage"

When('user searches for customer {string}', (customer) => {
    searchCustomerPage.customerSearchTextbox.clear().type(customer)
})

Then('user should see the customer {string}', (customer) => {
    if (customer !== '*') {
        let name = customer.split(' ')
        searchCustomerPage.firstNameColumn.should('have.text', name[0])
        searchCustomerPage.lastNameColumn.should('have.text', name[1])
    }
    searchCustomerPage.deleteButton.should('have.length.gte', 1)
})

And('user deletes all the customers', () => {
    searchCustomerPage.deleteButton.click({ multiple: true })
    searchCustomerPage.deleteButton.should('not.exist')
})

Then('user should not see any customer', () => {
    searchCustomerPage.deleteButton.should('not.exist')
})

When('user navigates to search Customer page', () => {
    searchCustomerPage.customer.click()
    searchCustomerPage.customerSearchTextbox.should('be.visible')
})