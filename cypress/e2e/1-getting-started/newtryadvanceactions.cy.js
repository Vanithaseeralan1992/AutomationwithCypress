/// <reference types="cypress" />


context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io')
    })

    it.only('Action -> type() test',()=>{
        cy.contains('type').click()
        cy.get('#email1').type('test@test.com').should('not.have.value','fake@example.com')
    })

})