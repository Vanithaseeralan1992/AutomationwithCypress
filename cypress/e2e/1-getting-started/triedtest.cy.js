///<reference types="cypress"/>

it('Google test', function(){
    cy.visit('https://www.google.com/')
    cy.get('#L2AGLb > .jyfHyd').click()
    cy.get('.gLFyf').type('Automation step by step{enter}')
    //cy.visit('https://www.altinn.no/')
    })
    
    it('Altinn test', function(){
    cy.visit('https://accounts.google.com/')
    cy.wait(2000)
    cy.get('body').type('vanithaseeralan@gmail.com')
    //cy.wait(1000)
    cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click().wait(1000)
    //cy.wait(1000)
    
    })
    
    it('facebook login', function(){
        cy.visit('https://www.facebook.com').wait(1000)
        cy.get('[data-testid=cookie-policy-dialog-accept-button]').click()
    
        cy.get('[data-testid=royal_email]').type('vani1026135@gmail.com').wait(1000)
        cy.get('[data-testid=royal_pass]').type('pavin30042015').wait(1000)
        cy.get('[data-testid=royal_login_button]').click()
    
    })
    
    it('facebook signup automation', function()
    {
     cy.visit('https://www.facebook.com/campaign/landing.php')
     cy.get('[data-testid=cookie-policy-dialog-accept-button]').click()
    
    
    })
    
    it.only('github login', function(){
        cy.visit('https://github.com/login')
        cy.get('#login_field').type('Vanithaseeralan1992').should('have.value', 'Vanithaseeralan1992')
        cy.get('#password').type('pavin30042015')
        cy.get('.btn').click().wait(1000)
        
    })