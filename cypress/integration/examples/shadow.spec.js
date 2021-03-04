describe('To test Shadow DOM using Cypress', () => {
    
    it('Test shadow DOM', () => {
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app').shadow()
            .find('app-toolbar input#input')
            .type('Software Testing')
    });

    it('Test shadow DOM with config', () => {
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('app-toolbar input#input', { includeShadowDom: true }).type('Software Testing')
    });
});