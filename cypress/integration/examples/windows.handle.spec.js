/// <reference types="cypress" />

describe('Handling windows', () => {
    
    it('to handle new window', () => {
        cy.visit('http://the-internet.herokuapp.com/windows')
        cy.get('h3').should('have.text', 'Opening a new window')
        cy.contains('Click Here').invoke('removeAttr', 'target').click()
        cy.get('h3').should('have.text', 'New Window')
    });

    it.only('to handle pop window', () => {
        cy.visit('http://way2automation.com/')
        cy.window().then(win => { 
            cy.stub(win, 'open', () => {
                win.location.href='https://sso.teachable.com/secure/673/users/sign_in?reset_purchase_session=1'
            }).as('popup')
        })
        cy.contains('MEMBER LOGIN').click()
        cy.get('@popup').should('be.calledWith', 'https://sso.teachable.com/secure/673/users/sign_in?reset_purchase_session=1')
        cy.get('#user_email').type('testing@email.com')

        cy.go('back')
    });

    it('to handle modal window', () => {
        cy.visit('http://the-internet.herokuapp.com/entry_ad')
        cy.get('.modal-title>h3').should('be.visible')
        cy.get('.modal-title>h3').should('have.text', 'This is a modal window')
        cy.contains('Close').click();
        cy.get('.modal-title>h3').should('not.be.visible')
        cy.contains('click here').click();
        cy.get('.modal-title>h3').should('be.visible')
    });
});