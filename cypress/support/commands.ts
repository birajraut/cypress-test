// // ***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// import { User } from './interfaces';
//
// Cypress.Commands.add('signup', (user: User) => {
//     cy.visit('/signup');
//     cy.get('input[name="username"]').type(user.username);
//     cy.get('input[name="email"]').type(user.email);
//     cy.get('input[name="password"]').type(user.password);
//     cy.get('button[type="submit"]').click();
// });
//
// Cypress.Commands.add('login', (user: User) => {
//     cy.visit('/login');
//     cy.get('input[name="email"]').type(user.email);
//     cy.get('input[name="password"]').type(user.password);
//     cy.get('button[type="submit"]').click();
// });
//
// Cypress.Commands.add('createUsers', (count: number) => {
//     const users: User[] = [];
//     for (let i = 0; i < count; i++) {
//         const username = `user_${Math.floor(Math.random() * 100000)}`;
//         const email = `user_${Math.floor(Math.random() * 100000)}@example.com`;
//         const password = `password_${Math.floor(Math.random() * 100000)}`;
//         const user: User = { username, email, password };
//         cy.signup(user);
//         users.push(user);
//     }
//     Cypress.env('users', users);
// });