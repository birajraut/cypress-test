import { signIn, checkVendorExists, getSiteConfig } from "../support/utils";

let jwtToken =
describe("Automation testing of dialer", function(){
    // let fixtureData:any;
    // before(() => {
    //     // Check if running headless mode via Cypress env
    //     if (Cypress.env('headless') === 'true') {
    //         cy.log('Running in headless mode');
    //     }
    // });
    // beforeEach(function(){
    //     // cy.fixture('apiData').then((data)=>{
    //     //     fixtureData = data;
    //     //     console.log(fixtureData);
    //     //
    //     // });
    //     // cy.visit("https://carbonsd.3cx.us:5001/webclient/#/login");
    // })

    it('should dial number in the dialer', () => {

        cy.request({
            method: 'POST',
            url: 'https://aim.aegix.global/api/v1/auth/',
            headers: {
                "Connection": "keep-alive",
                failOnStatusCode: false,
            },
            body: {
                "email": Cypress.env('USERNAME'),
                "password": Cypress.env('PASSWORD'),
            }

        }).then((response) => {
            console.log(response)
            expect(response.status).to.eq(201);

        });
        // cy.get('[id="loginInput"]').type("michael@aegix.co");
        // cy.get('[id="passwordInput"]').type("x7Zi9DErVKbvURA");
        // cy.get('[id="submitBtn"]').click()
        // cy.wait(2000);
        // cy.get('[id="menuDialer"]').should('be.visible').click();
        // cy.get('[id="dialpad-1"]').click();
        // cy.get('[id="dialpad-1"]').click();
        // cy.get('[id="dialpad-0"]').click();
        // cy.get('[id="dialpad-6"]').click();
        // cy.get('[id="dialpad-5"]').click();
        // cy.get('[id="dialpad-0"]').click();
        // cy.get('[id="btnCall"]').click();
    });
})
