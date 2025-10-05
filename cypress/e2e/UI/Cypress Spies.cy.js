describe('Button Click Test', () => {

  Cypress.on('uncaught:exception', () => false);
  
  it('Clicks the Trigger Action button', () => {
    cy.visit('https://practice.expandtesting.com/spies-stubs-clocks');
    

    cy.wait(1000);
    

    cy.contains('button', 'Trigger Action', { timeout: 10000 })
      .should('be.visible')
      .click();
    

    cy.wait(500)
    cy.log('Button clicked successfully');
  });
});