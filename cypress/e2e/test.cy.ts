describe('TestPlan', function (){
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    });
    it('should visit this url', () => {
        cy.visit('https://demo.automationtesting.in/Register.html');
        // cy.get('[class="menu-list"]').contains('Text Box').click();
        // cy.get('[id="userName"]').type('Anil kumar Shah');
        // cy.get('[id="userEmail"]').type('Anil@gmail.com');
        // cy.get('[class="menu-list"]').contains('Check Box').click();
        // cy.get('[ng-model="FirstName"]').check();
        cy.get('[ng-model="Skill"]').select('C');
    });
})