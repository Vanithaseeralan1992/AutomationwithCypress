

/// <reference types="cypress" />

describe('demo test suite testing with cypress', ()=>{
    it('fist test case demo',()=>{
        cy.visit('https://github.com/login')
        //cy.get('.mr-3 > .HeaderMenu-link').click()
        cy.get('#login_field').type('Vanithaseeralan1992').wait(1000)
        cy.get('#password').type('pavin30042015').wait(1000)
        cy.get('.btn').click()
        cy.get('.js-sticky > #dashboard-repos-container > #repos-container > .list-style-none > :nth-child(1) > .width-full > .d-inline-flex > [style="max-width: 260px"]').click()
        cy.get('.css-truncate > .js-navigation-open').dblclick()
    
    })
    it.only('second test case demo for linkedin',()=>{
        //cy.visit('https://accounts.google.com/')           
       // cy.get('[id=identifierId]').type('vanithaseeralan') ----working
       cy.visit('https://www.linkedin.com/login')
       cy.get('#username').type('@yahoo.com')
       cy.get('#password').type('password')
       cy.get('.btn__primary--large').click()
      // cy.get('.btn__secondary--large-muted').click()
       //cy.get('#ember117 > .artdeco-button__icon > .mercado-match').click()
       cy.get('input[id=msg-overlay-list-bubble-search__search-typeahead-input]').type('seeralan').wait(4000)
      // cy.get('div[class="msg-overlay-search-result-name t-12 t-black t-bold flex-shrink-zero truncate"]')
       cy.contains('Seeralan Radha').should('exist').click()
       cy.get('.msg-form__contenteditable > p').type('Hello how are you, this is from automation test message!!!{enter} Have a nice day...')
       cy.get('.msg-form__send-button').click()
       //not-----cy.get('#ember435 > .artdeco-button__icon > .mercado-match').click()
       //cy.get('#ember666 > .artdeco-button__icon > .mercado-match').click()
       //cy.get('#ember435 > .artdeco-button__icon > .mercado-match').click()
       //cy.get('svg[class=mercado-match]').click()
       //cy.get('#ember372 > .artdeco-button__icon > .mercado-match').find('path').contains('')
       
       })

})
