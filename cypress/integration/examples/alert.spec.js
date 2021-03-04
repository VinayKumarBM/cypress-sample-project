describe('To test alert functionality using Cypress', () => {

    beforeEach('launch URL', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })

    it('accept confirmation box', () => {
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.equal('I am a JS Confirm')
        })
        cy.xpath('//button[text()="Click for JS Confirm"]').click();
        cy.get('#result').should('have.text', 'You clicked: Ok');
    });

    it('reject confirmation box', () => {
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.equal('I am a JS Confirm')
            return false
        })
        cy.xpath('//button[text()="Click for JS Confirm"]').click();        
        cy.get('#result').should('have.text', 'You clicked: Cancel');        
    });

    it('handle alert using cypress', () => {
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('I am a JS Alert');
        })
        cy.xpath('//button[text()="Click for JS Alert"]').click();    
        cy.get('#result').should('have.text', 'You successfully clicked an alert');
    });

    it('handle alert prompt using cypress', () => {
        cy.window().then(function(promptelement){
            cy.xpath('//button[text()="Click for JS Prompt"]').click();
            cy.stub(promptelement, "prompt").returns("Hello Vinay");
          });
        cy.get('#result').should('have.text', 'You entered: Hello Vinay');
    });

});