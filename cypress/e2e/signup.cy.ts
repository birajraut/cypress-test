
describe('Signup', () => {
    it('creates 200 users', () => {
        cy.createUsers(200);
    });
});

describe('Login', () => {
    it('logs in with created users', () => {
        const users: User[] = Cypress.env('users');
        users.forEach(user => {
            cy.login(user);
            // Add assertions for successful login if needed
        });
    });