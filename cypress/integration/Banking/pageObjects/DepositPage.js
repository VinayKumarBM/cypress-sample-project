class DepositPage{
    get depositPageButton() {
        return cy.xpath("//div[@class='center']/button[contains(text(),'Deposit')]")
    }

    get depositAmountTextbox() {
        return cy.get('[ng-model="amount"]')
    }

    get depositButton() {
        return cy.xpath("//form//button[contains(text(),'Deposit')]")
    }

    get bankBalanceText() {
        return cy.get('strong[class="ng-binding"]:nth-child(2)')
    }

    get messageText() {
        return cy.get('[ng-show="message"]')
    }
}

const depositPage = new DepositPage()
export default depositPage