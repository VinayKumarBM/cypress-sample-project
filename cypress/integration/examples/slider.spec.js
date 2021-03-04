describe('To work with sliders using Cypress', () => {
    
    it('Change value of slider of type=range', () => {
        cy.visit('http://the-internet.herokuapp.com/horizontal_slider')
        cy.get('[type="range"]').invoke('val', '3.5').trigger('change')
        cy.get('#range').should('have.text', '3.5')
        cy.get('[type="range"]').invoke('val', '1').trigger('change')
        cy.get('#range').should('have.text', '1')
    });

    it('Change value of slider of css style type', () => {
        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.get('#slider span').invoke('attr', 'style','left: 60%;')
        cy.get('#slider span').invoke('attr', 'style','left: 25%;')
    });
});