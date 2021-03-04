import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import homePage from "../pageObjects/HomePage"
import loginPage from "../pageObjects/LoginPage"
import depositPage from "../pageObjects/DepositPage"
import withdrawalPage from "../pageObjects/WithdrawalPage"
import transactionPage from "../pageObjects/TransactionsPage"

Given('user is on Bank application as a Customer', () => {
    homePage.open()
    homePage.customerLoginButton.click()
})

When('user selects {string} to login', (customerName) => {
    loginPage.customerNameDropdown.select(customerName).find('option:selected').should('have.text', customerName)
    loginPage.loginButton.click()
    loginPage.customerNameText.should('have.text', customerName)
})

And('user makes a deposit of {string}', (depositAmount) => {
    depositPage.depositPageButton.click()
    depositPage.depositAmountTextbox.clear().type(depositAmount)
    depositPage.depositButton.click()
})

Then('user should see the message {string}', (message) => {
    depositPage.messageText.should('have.text', message)
})

And('user makes a withdrawal of {string}', (withdrawalAmount) => {
    withdrawalPage.withdrawalPageButton.click()
    withdrawalPage.withdrawButton.should('be.visible')
    withdrawalPage.withdrawalAmountTextbox.clear().type(withdrawalAmount)
    withdrawalPage.withdrawButton.click()
})

And('user should have a balance of {string}', (balanceAmount) => {
    depositPage.bankBalanceText.should('have.text', balanceAmount)
})

And('user logs out of the application', () => {
    loginPage.logoutButton.click()
    loginPage.customerNameDropdown.should('exist')
})

And('user verifies the transaction history', (datatable) => {
    transactionPage.transactionPageButton.click()
    let options = { month: 'short', day: 'numeric', year: 'numeric' };
    let date = new Date().toLocaleDateString("en-US", options)
    datatable.hashes().forEach((row, index) => {
        transactionPage.transactionRow.eq(index).then((tRow) => {
            cy.get(tRow).find('td').eq(0).should('contain.text', date)
            cy.get(tRow).find('td').eq(1).should('have.text', row.amount)
            cy.get(tRow).find('td').eq(2).should('have.text', row.transactionType)
        })
    })
})
