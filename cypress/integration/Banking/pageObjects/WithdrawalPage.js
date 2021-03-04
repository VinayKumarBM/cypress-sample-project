class WithdrawalPage {
    
    get withdrawalPageButton() {
        return cy.xpath("//div[@class='center']/button[contains(text(),'Withdrawl')]")
    }

    get withdrawButton() {
        return cy.xpath("//form//button[contains(text(),'Withdraw')]")
    }

    get withdrawalAmountTextbox() {
        return cy.get('[ng-model="amount"]')
    }
}

const withdrawalPage = new WithdrawalPage()
export default withdrawalPage