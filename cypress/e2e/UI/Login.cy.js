
describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/login');
  });

  it('Valid login', () => {
  cy.get('#username').type('practice');
  cy.get('#password').type('SuperSecretPassword!');
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/secure');
  cy.contains('Welcome to the Secure Area').should('be.visible');
});


  it('Invalid Username', () => {
  cy.get('#username').type('database');
  cy.get('#password').type('SuperSecretPassword!');
  cy.get('button[type="submit"]').click();
  cy.get('#flash', { timeout: 10000 })
  .invoke('text')
  .should('include', 'Your username is invalid!');

  
});

it('Invalid Password', () => {
  cy.get('#username').type('practice');
  cy.get('#password').type('Super');
  cy.get('button[type="submit"]').click();
 cy.get('#flash', { timeout: 10000 })
  .invoke('text')
  .should('include', 'Your password is invalid!');

});

});
