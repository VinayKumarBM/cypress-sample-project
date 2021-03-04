describe('Verify GET calls through cypress', () => {
    let baseUrl
    
    beforeEach('set base URL', () => {
        baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1';
    })
    

    it('get details of the activities', () => {

        let response = cy.api({ method: 'Get', url: baseUrl+ '/Activities'})
        response.its('status').should('eq', 200)            
    });

    it('get details of the book', () => {
        cy.request(baseUrl+'/Books').then(response => {
            expect(response.status).equal(200)
            expect(response.body).length.to.be.greaterThan(100)
            expect(response.body[0].id).equal(1)
            expect(response.body[0]).to.have.property('title', 'Book 1')
        })            
    });

    it('get details of the author', () => {
        let response = cy.api({ url: baseUrl + '/Authors' })
            
        response.its('body.0').then(author => {
            expect(author.id).equal(1)
            expect(author).to.have.property('firstName', 'First Name 1')
            expect(author.lastName).equal('Last Name 1')
            expect(author).to.have.property('idBook', 1)
        })            
    });
});