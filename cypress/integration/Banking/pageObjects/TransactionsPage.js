class TransactionsPage {
    get transactionPageButton() {
        return cy.xpath("//div[@class='center']/button[contains(text(),'Transactions')]")
    }

    get transactionRow() {
        return cy.get('.table tbody tr[class="ng-scope"]')
    }
}

const transactionPage = new TransactionsPage()
export default transactionPage