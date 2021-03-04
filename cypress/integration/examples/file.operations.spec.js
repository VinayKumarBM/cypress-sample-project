/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

describe('To test the upload and download of file using Cypress', () => {

    it('uploading the file', () => {
        cy.visit('http://the-internet.herokuapp.com/upload');
        const filepath = 'example.json'
        cy.xpath('(//input[@type="file"])[1]').attachFile(filepath)
        cy.wait(1000)
        cy.get('#file-submit').click();
        cy.get('h3').invoke('text').should('eq', 'File Uploaded!')
        cy.get('#uploaded-files').invoke('text').should('include', filepath)
    });

    it.only('download the file', () => {
        cy.visit('http://the-internet.herokuapp.com/download')
        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt',
            'downloads', 'text.txt')
        cy.log('Download is complete... Reading file now...')
        cy.readFile('downloads/text.txt').should('contain', 'Lorem ipsum dolor sit amet')
        let fileName
        cy.get('.example>a').eq(0).then($ele => {
            fileName = Cypress.$($ele).text()
            cy.log(fileName)
            cy.get($ele).text({ whitespace: 'simplify' }).then(link => cy.log('Link name: ' + link))
            cy.get($ele).attribute('href', { whitespace: 'simplify' }).then(url => cy.log('Link url: ', url))
        })
        cy.url().then(url => {
            let downloadLink = url + '/' + fileName
            cy.log(url + '/' + fileName)
            cy.downloadFile(downloadLink, 'downloads', fileName)            
            cy.log('Download is complete... Reading file now...')
        cy.readFile('downloads/'+fileName).should('exist')
        })        
    });
});