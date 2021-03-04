/// <reference types="cypress" />

describe('handling frames with cypress', () => {
    
    it('to switch between iframes', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('iframe') // check if the frame is loaded
        cy.iframe('iframe').find('p').should('be.visible').text() // switch frame and perform action

        cy.enter('iframe').then(getBody => {    
            getBody().find('p').should('be.visible').text()
            getBody().find('p').should('be.visible').clear()
            cy.get('[aria-label="Bold"] > .tox-icon > svg').click()
            getBody().find('p').should('be.visible').type('Hello Vinay!!')
        })        
        cy.get('[data-index="1"]').should('have.text','strong')
    });

    it('to switch between frames', () => {
        cy.visit('http://the-internet.herokuapp.com/nested_frames')
        cy.frameLoaded('[name="frame-top"]')
        
        cy.iframe('[name="frame-top"]').find('[name="frame-middle"]').should('be.visible')        
        // using custom method to get text from inner frame
        cy.get('[name="frame-top"]').getFrame().find('[name="frame-middle"]').getFrame().find('#content').text()
    });
});