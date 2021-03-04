describe('Write into a file and read the details', () => {
    it('Write and read from file', () => {
        let filePath = './cypress/downloads/message.txt';
        cy.writeFile(filePath, 'Hello World!\n')
        cy.writeFile(filePath, '\nHave a wonderful day ahead!!', { flag: 'a+' })
        cy.readFile(filePath).should('include', 'Hello World!')   
    });
});