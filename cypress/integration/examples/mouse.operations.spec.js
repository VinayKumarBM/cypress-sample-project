/// <reference types="cypress" />

describe('To perform different mouse operations using Cypress', () => {

    it('Drag and drop example', () => {
      cy.visit('http://the-internet.herokuapp.com/drag_and_drop')  
      cy.get('#column-a').drag('#column-b');
      cy.get('#column-a>header').should('have.text', 'B')
      cy.get('#column-b').drag('#column-a');
      cy.get('#column-a>header').should('have.text', 'A')
    });

    it('Mouse hover actions', () => {
        cy.visit('http://the-internet.herokuapp.com/hovers')
        cy.get('.figure>img').eq(0).trigger('mouseover')//.invoke('show');
        cy.get('.figcaption>h5').first().then((txt)=>{
            cy.log('Hovered over user '+txt.text())
        })
        cy.contains('View profile').click({ force: true })
    });

    it("should show submenu options using invoke", () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
          });
        cy.visit("https://chercher.tech/practice/popups");
        cy.contains('I am broken link').rightclick();
        cy.wait(2000)
        //show method can be applied only for the immediate parent
        cy.get("div.dropdown-content").invoke("show");
        cy.contains("CherCher Tech").click();
        cy.url().should("include", "chercher.tech");
      });
});