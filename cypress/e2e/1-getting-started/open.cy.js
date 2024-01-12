describe('open the google',()=>{

    it.only('je veux ovrir le google.com', ()=>{

        cy.url().as('URL')
     //cy.get('#L2AGLb > .QS5gu').should('have.text','Tout accepter').click()
     //cy.get('#APjFqb').type('facebook')
     //cy.get('.FPdoLc > center > .gNO89b').click()
     cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').invoke('text').then(textconn=>{
        expect(textconn).to.eql('Elements')
     
        cy.get('@URL').should('contain','demo')

        cy.get(':nth-child(4) > :nth-child(1) > .card-up').click()
    })
    })
})
