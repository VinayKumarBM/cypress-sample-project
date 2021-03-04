
describe('To tests the Address book functionality', () => {

    beforeEach('launch the address book app', () => {
        cy.visit(Cypress.config('baseUrl'))
        cy.contains('Sign in').click()
        cy.get('input[type="submit"]').should('have.value', 'Sign in')
        cy.login(Cypress.config('userName'), Cypress.config('password'))
        cy.get('h1').should('have.text', 'Welcome to Address Book')
        cy.get('[data-test="addresses"]').click();
        cy.get('h2').should('have.text', 'Addresses')
    })    

    it('add an Address to Address Book', () => {
        cy.contains('New Address').click();
        cy.get('#address_first_name').type('James')
        cy.get('#address_last_name').type('Bond')
        cy.get('#address_street_address').type('1600 Pennsylvania Avenue NW')
        cy.get('#address_secondary_address').type('Washington DC')
        cy.get('#address_city').type('Washington')
        cy.get('#address_state').select('Washington')
        cy.get('#address_state').find('option:selected').should('have.text', 'Washington')
        cy.get('#address_zip_code').type('98101')
        cy.xpath('//input[@value="canada"]').click()
        cy.get('#address_birthday').type('1980-12-25')
        cy.get('#address_age').type('41')
        cy.get('#address_website').type('http://www.jamebond007.com')
        cy.get('#address_picture').attachFile('Avatar.jpg')
        cy.get('#address_phone').type('9876007007')
        cy.xpath('//input[@id="address_interest_climb"]').check()
        cy.get('#address_note').type('This message will self destruct in next 10 min')
        cy.contains('Create Address').click()
        cy.get('[data-test=notice]').should('have.text', 'Address was successfully created.')
        cy.contains('List').click()
    });

    it('Validate the address details in address list', () => {
        cy.get('table>tbody>tr:last-child>td').then((cell) => {
            expect('James').equal(cell.eq(0).text(), 'First Name')
            expect('Bond').equal(cell.eq(1).text(), 'Last Name')
            expect('Washington').equal(cell.eq(2).text(), 'City Name')
            expect('WA').equal(cell.eq(3).text(), 'State Name')
            expect('Show').equal(cell.eq(4).text(), 'Show link text')
            expect('Edit').equal(cell.eq(5).text(), 'Edit link text')
            expect('Destroy').equal(cell.eq(6).text(), 'Delete link text')
        })
    });

    it('Validate the details of the Address added', () => {
        cy.get('tbody>tr:last-child').find('[data-test^="show"]').click();
        cy.get('.row>span:last-child').then(col => {
            expect('James').equal(col.eq(0).text().trim(), 'First Name')
            expect('Bond').equal(col.eq(1).text().trim(), 'Last Name')
            expect('1600 Pennsylvania Avenue NW').equal(col.eq(2).text().trim(), 'Street Address')
            expect('Washington DC').equal(col.eq(3).text().trim(), 'Secondary Address')
            expect('Washington').equal(col.eq(4).text().trim(), 'City')
            expect('WA').equal(col.eq(5).text().trim(), 'State')
            expect('98101').equal(col.eq(6).text().trim(), 'Zip code')        
            expect('canada').equal(col.eq(7).text().trim(), 'Country')
            expect('12/25/1980').equal(col.eq(8).text().trim(), 'Birthday')
            expect('41').equal(col.eq(10).text().trim(), 'Age')
            expect('http://www.jamebond007.com').equal(col.eq(11).text().trim(), 'Website')
            expect('987-600-7007').equal(col.eq(12).text().trim(), 'Phone number')
            expect('Yes').equal(col.eq(13).text().trim(), 'Climbing')
            expect('No').equal(col.eq(14).text().trim(), 'Dancing')
            expect('No').equal(col.eq(15).text().trim(), 'Reading')
            expect('This message will self destruct in next 10 min').equal(col.eq(16).text().trim(), 'Note')            
        })
        cy.contains('List').click()
        cy.get('h2').should('have.text', 'Addresses')
    });

    it('Edit added Address', () => {
        cy.get('tbody>tr:last-child').find('[data-test^="edit"]').click();
        cy.get('#address_first_name').clear().type('John')
        cy.get('#address_last_name').clear().type('Doe')        
        cy.get('#address_city').clear().type('New York')
        cy.get('#address_state').select('New York')
        cy.get('#address_state').find('option:selected').should('have.text', 'New York')        
        cy.xpath('//input[@value="us"]').click()
        cy.xpath('//input[@id="address_interest_climb"]').uncheck().should('not.be.checked')
        cy.xpath('//input[@id="address_interest_dance"]').check().should('be.checked')
        cy.xpath('//input[@id="address_interest_read"]').check().should('be.checked')
        cy.get('#address_note').clear().type('This updated message will self destruct in next 10 min')
        cy.contains('Update Address').click()
        cy.get('[data-test=notice]').should('have.text', 'Address was successfully updated.')
        cy.contains('List').click()
    });

    it('Validate the updated address details in address list', () => {
        cy.get('table>tbody>tr:last-child>td').then((cell) => {
            expect('John').equal(cell.eq(0).text(), 'First Name')
            expect('Doe').equal(cell.eq(1).text(), 'Last Name')
            expect('New York').equal(cell.eq(2).text(), 'City Name')
            expect('NY').equal(cell.eq(3).text(), 'State Name')
            expect('Show').equal(cell.eq(4).text(), 'Show link text')
            expect('Edit').equal(cell.eq(5).text(), 'Edit link text')
            expect('Destroy').equal(cell.eq(6).text(), 'Delete link text')
        })
    });

    it('delete all the addresses', async () => {
        let len = Cypress.$('td a[data-method="delete"]').length
        cy.log('Number of Addresses to delete: ' + len)
        for (let index = len; index > 0; index--) {
            cy.xpath('(//a[text()="Destroy"])[' + index + ']').click()
            cy.on('window:confirm', (alertText) => {
                expect(alertText).to.equal('Are you sure?')
            })
            cy.get('[data-test=notice]').should('have.text','Address was successfully destroyed.')
        }    
        cy.contains('Destroy').should('not.exist');
    });
});