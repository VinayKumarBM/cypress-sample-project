class AddCustomerPage{
    get addCustomer() {
        return cy.xpath("//div[@class='center']/button[contains(text(),'Add Customer')]")
    }

    get firstNameTextfield() {
        return cy.get("[ng-model='fName']")
    }

    get lastNameTextfield() {
        return cy.get("[ng-model='lName']")
    }

    get postalCodeTextfield() {
        return cy.get("[ng-model='postCd']")
    }

    get addCustomerButton() {
        return cy.get("button[type='submit']")
    }
}

const addCustomerPage = new AddCustomerPage()
export default addCustomerPage