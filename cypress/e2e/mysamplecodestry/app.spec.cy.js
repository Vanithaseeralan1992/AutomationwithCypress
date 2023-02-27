///<reference types="cypress" />
context('Actions', ()=>{
beforeEach(()=>{
    cy.visit("/")
})
});

it('should have the title "NG cypress starter', ()=>{
cy.title().should('eq','NG cypress start');
});
it('should have the intial dummy messages', ()=>{
    cy.get('.messages-list .message-item')
    expect(messages.to.have.lenght(4))
 });

it('should add a new message to the list', ()=>{
    cy.get(".chat-input")
    .type("Hellow, world!")
    .get('.send-button button')
   .click();
   cy.get(".messages-list . message-item").should((messagesList) =>{
    expect(messagesList).to.have.length(5);
   });
});
it('should remove a message when the delete button is clicked from the list', ()=>{
    cy.get('.message-list .message-item').eq(2).find('.delete-btn').click({
        force:true,
    });
    cy.get('.messages-list .message-item').should((messagesList)=>{
        expect(messagesList).to.have.length(3);
    });
});
it('should navigate to the message page on the list message item click', ()=>{
    cy.get('.messages-list .message-item').eq(3).click();
    cy.url().should('eq','http://localhost:56302/message/3')
});
it('should delete the message and go back to home page ', ()=>{
cy.visit("/message/3");
//cy.get('.card .card-body .btn.btn-danger')
cy.get('.card').contains("Delete").click();
cy.url().should('eq', 'http://localhost:56302/chat');
cy.get('.meessages-list .message-item').should((messagesList)=>{
    expect(messagesList).to.have.length(3);
});
});