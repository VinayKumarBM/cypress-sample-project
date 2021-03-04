class OpenAccountPage {
    get openAccount() {
        return cy.xpath("//div[@class='center']/button[contains(text(),'Open Account')]")
    }

    get customerDropdown() {
        return cy.get("#userSelect")
    }

    get currencyDropdown() {
        return cy.get("#currency")
    }

    get processButton() {
        return cy.contains("Process")
    }
}

const openAccountPage = new OpenAccountPage()
export default openAccountPage