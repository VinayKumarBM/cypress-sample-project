describe('Xlsx file', () => {

    beforeEach('data setup', function () {
        cy.visit('https://react-redux.realworld.io/#/login')
    })

    it('Read data from excel for valid credentials', () => {
        cy.task('readXLSX', { file: 'TestData.xlsx', sheet: "Sheet1", testCaseID: "TC001_ValidLogin" }).then((data) => {
            cy.get('[type="email"]').clear().type(data.email)
            cy.get('[type="password"]').clear().type(data.password)
            cy.get('button').click()
            cy.contains(data.result, { timeout: 10000 }).should('exist')
        })
    });

    it('Read data from excel for invalid credentials', () => {
        cy.task('readXLSX', { file: 'TestData.xlsx', sheet: "Sheet1", testCaseID: "TC002_ValidLogin" }).then((data) => {
            cy.get('[type="email"]').clear().type(data.email)
            cy.get('[type="password"]').clear().type(data.password)
            cy.get('button').click()
            cy.get('.error-messages > li', { timeout: 10000 }).should('have.text', data.result)
        })
    });
})
