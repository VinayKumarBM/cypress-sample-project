describe('Verify POST calls through cypress', () => {
    
    let baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1';

    it('POST an activity & validate response', () => {
        const activity = {
            "id": 99,
            "title": "API with Cypress",
            "dueDate": "2021-02-15T17:14:15.471Z",
            "completed": true
          }
        let response = cy.request('POST', baseUrl+'/Activities', activity)
        response.its('status').should('eq', 200)
    });

    it('create an activity', () => {
        cy.api({
            method: 'POST',
            url: baseUrl+'/Activities',
            body: {
                "id": 99,
                "title": "API with Cypress",
                "dueDate": "2021-02-15T17:14:15.471Z",
                "completed": true
              }
        }).then(response => {
            expect(response).property('status').to.equal(200)
            expect(response.body).property('id').to.equal(99)
            expect(response.body.title).equal('API with Cypress')
            expect(response.body).to.have.property('completed', true)
        })
    });
});