class SearchCustomerPage{

    get customer() {
        return cy.contains('.center>button', 'Customers')
    }

    get customerSearchTextbox() {
        return cy.get("[ng-model='searchCustomer']")
    }

    get firstNameColumn() {
        return cy.get(".table tbody tr.ng-scope td").first()
    }

    get lastNameColumn() {
        return cy.get(".table tbody tr.ng-scope td").eq(1)
    }

    get deleteButton() {
        return cy.get(".table tbody tr.ng-scope td button")
    }
}

const searchCustomerPage = new SearchCustomerPage()
export default searchCustomerPage