


describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

cy.get('#opentab').invoke('removeAttr','target').click()
//Cette ligne de code utilise Cypress pour sélectionner un élément de la page avec l'identifiant (ID) "opentab". 
//Ensuite, elle invoque la méthode invoke() pour supprimer l'attribut "target" de cet élément. 
//L'attribut "target" est souvent utilisé pour ouvrir un lien dans une nouvelle fenêtre ou un nouvel onglet, et en supprimant cet attribut, 
//vous permettez au lien de s'ouvrir dans la même fenêtre ou le même onglet. 
//Enfin, la méthode click() est utilisée pour simuler un clic sur cet élément.




//cy.url().should('include','qaclickacademy')

cy.go('back')




}  )



}  )