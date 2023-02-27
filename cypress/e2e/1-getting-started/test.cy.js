/// <reference types="cypress" />

describe('Test suit for basic testing',()=>{
  it('First demo Test case',()=>{
      cy.visit('https://codedamn.com')
      //mocha library 
      //should assertion check here

  //cy.contains('Explore Learning Paths').should('exist')
    cy.contains('Explore Learning Paths').should('have.text','Explore Learning Paths')
  //cy.contains('[data-testid=title]').should('exist')
  })
  it('viewport of the page',()=>{
      cy.viewport(1280,720)
      //cy.viewport('iphone-3')
      cy.visit('https://codedamn.com')
  })
  it.only('test case for signin',()=>{
      
      cy.visit('https://codedamn.com')
      
      cy.get('button[data-bypassmenuclose=true]')
      .should('have.text','Open main menu').click()
      
      cy.get('.pt-2 > [href="/login"]').click()
      cy.contains('Sign in to your account').should('exist')
      cy.get('[data-testid=username]').type('admin')
      cy.get('[data-testid=password]').type('admin')
      cy.get('[data-testid=login]').click()
      //cy.get('.mt-6 > :nth-child(1) > .w-full').click()
      //cy.get('div > input[id=identifierId]').type('vanithaseeralan@gmail.com')


  })
})