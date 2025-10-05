describe('Register Page Testing', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
  });
  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/register'); 
  })

  
  it('Positive Case', () => {
    cy.get('input[name="username"]').clear().type('Shreedk').should('have.value', 'Shreedk');
    cy.get('input[name="password"]').clear().type('Password@001').should('have.value', 'Password@001');
    cy.get('#confirmPassword').clear().type('Password@001').should('have.value', 'Password@001');

    cy.get('button[type="submit"]').click(); 
    
  });
it('Negative Case', () => {
     cy.get('input[name="username"]').clear().type('Shreedk').should('have.value', 'Shreedk');
     cy.get('input[name="password"]').clear().type('Password123!');
     cy.get('#confirmPassword').clear().type('Password321!').blur();

cy.get('button[type="submit"]').click();

cy.get('.password-error', { timeout: 10000 })
  .should('be.visible')
  .and('contain.text', 'Passwords do not match');



  });


  
});