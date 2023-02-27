/// <reference types="cypress" />
    
  it('MBN login', () => {
    cy.visit('https://cpbx-at.telenor.no')

    cy.get('#txtLoginHint').type('46180754')
    cy.get('#btnGo').click()

    cy.get('input[autocomplete="one-time-code"]').type('12345')
    cy.get('button[class="code-button"]').click()
    cy.contains(' Start sentralbord').should('have.value',' Start sentralbord').click()
 
  })

  
  
