/// <reference types="cypress" />


context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io')
    })

describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
      //expect(true).to.equal(false)
    })
    it('Visist the kitchen sinck', ()=>{
      //cy.visit('https://example.cypress.io')
      //cy.contains('type')
      cy.contains('type').click()
      cy.url().should('include','/commands/actions')
      cy.get('#email1').type('test@testmail.com')
      cy.get('#email1').should('have.value','test@testmail.com')
      cy.get('#email1').clear()
     
    })

    it('test trials on cypress querying examples with get', ()=>{
        //cy.visit('https://example.cypress.io/')
        cy.contains('get').click().wait(1000)
        cy.get('.btn-primary').should('contain','Button')
        cy.get('.btn-primary').click()
        cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    })

    it.only(' test trials on cypress querying examples with Contains',()=>{
        //cy.visit('https://example.cypress.io/')
        cy.contains('get').click().wait(1000)
        cy.get('.query-list').contains('apples').should('have.class','first').wait(1000)
        cy.get('.query-button').contains('Save Form').should('have.class','btn')
    })

    it('test trials on cypress querying examples with "wintin"',()=>{
    cy.contains('within').click().wait(1000)
    cy.scrollTo(0,1500)
    cy.get('#inputName').type('Vanitha seeralan')
    cy.get('.query-form').within(()=>{
        cy.get('input:first').should('have.attr','placeholder','Email').type('test@test.com')
        cy.get('input:last').should('have.attr','placeholder','Password').type('password')
    })

    })
    it('test trials on cypress qerying examples with, root',()=>{
       cy.contains('root').click()
       cy.root().should('match','html')
       cy.get('.query-ul').within(()=>{
        cy.root().should('have.class','query-ul')
       })
    })

    it('different kind of selector and how cypress handling',()=>{  //best example for finding elements with selectors
      cy.visit('https://example.cypress.io/commands/querying')
      cy.scrollTo(0,1500)
      //cy.get('button').click() - not worked either
      cy.get('.btn.btn-large').click() // the class in code has info "btn btn-large" but in cypress we need to mention like this "btn.btn-large"
      cy.get('[name=submission]').click()
      cy.get('#main').click()
      cy.get('#main[role=button]').click()
      cy.contains('Submit').click()
      cy.get('[data-cy="submit"]').click()
    })

   it('test trials on cypress traversal-> children()',()=>{
    cy.contains('children').click()
    cy.get('.traversal-breadcrumb.breadcrumb').children('.active').should('contain','Data') //or 
    cy.get('.traversal-breadcrumb').children('.active').should('contain','Data') // half part in class is also ok -> .traversal-breadcrumb
   })

   it('test trials on cypress-> closest()',()=>{
    cy.contains('closest').click() 
    cy.get('.traversal-badge').closest('ul').should('have.class','list-group') //list ku ulla list check 
   })

   it('To get a DOM element at a specific index, use the .eq() command',()=>{ 
    //cy.contains('eq').click()  -not working becuase of eq i guess
    cy.visit('https://example.cypress.io/commands/traversal')
    cy.get('.traversal-list>li').eq(1).should('contain','siamese')  // list ku ulla list check 
 
   })

   it(' use the .filter()',()=>{
    cy.contains('filter').click()
    cy.get('.traversal-nav>li').filter('.active').should('contain','About')  // list ku ulla list check 
   })

   it('find() test',()=>{
    cy.contains('find').click()
    cy.get('.traversal-pagination').find('li').find('a').should('have.length','7') //find the full list
   })

   it('first()',()=>{
    cy.contains('first').click()
    //cy.scrollTo(0,1500)
    cy.get('.traversal-table td').first().should('contain','1')
   })

   it('last() test',()=>{
    cy.contains('last').click()
    cy.get('.traversal-buttons .btn-default').last().should('contain','Submit').click()
    cy.get('.btn-default[value=Submit]').click()
   })

   it('next() test',()=>{
    cy.contains('last').click()
    cy.get('.traversal-ul').contains('oranges').next().should('contain','bananas')
   })

   it('nextAll() test',()=>{
    cy.contains('nextAll').click()
    cy.get('.traversal-next-all').contains('oranges').nextAll().should('have.length',3)
   })
   
   it('nextUntil() test',()=>{
    cy.contains('nextUntil').click()
    cy.get('#fruits').nextUntil('#nuts').should('have.length',7)
   })

   it('not() test',()=>{
    cy.contains('not').click()
    cy.get('.traversal-disabled .btn').not('[disabled]').should('not.contain','Disabled')
   })

   it('parent() test',()=>{
    cy.contains('parent').click() 
    cy.get('.traversal-mark').parent().should('contain','Morbi leo risus')
   })

   it('parents() test',()=>{
    cy.contains('parents').click()
    cy.get('.traversal-cite').parents().should('match','blockquote')
   })

   it('parentsUntil() test', ()=>{
    cy.contains('parentsUntil').click()
    cy.get('.nav.clothes-nav').find('.active').parentsUntil('.nav.clothes-nav').should('have.length',2)
   })

   it('prev() test',()=>{
    cy.contains('prev').click()
    cy.get('.birds.list-group').find('.list-group-item.active').prev().should('contain','Lorikeets')
   })

   it('prevAll() test',()=>{
    cy.contains('prevAll').click()
    cy.get('.fruits-list').find('.third').prevAll().should('have.length',2)
   })

   it('prevUntil() test', ()=>{
    cy.contains('prevUntil').click()
    cy.get('.foods-list').find('#nuts').prevUntil('#veggies').should('have.length',3)
   })

   it('siblings() test', ()=>{
   cy.contains('siblings').click()
   cy.get('.nav.nav-pills.traversal-pills .active').siblings().should('have.length',2)
  })

  })
  

})