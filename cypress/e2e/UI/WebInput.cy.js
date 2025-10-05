describe('Web Inputs Testing', () => {
  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/inputs');
  });

 
  it('Positive Case', () => {
    cy.get('input[type="number"]').clear().type('3000').should('have.value', '3000');
    cy.get('input[type="text"]').clear().type('Dinesh Kumar').should('have.value', 'Dinesh Kumar');
    cy.get('input[type="password"]').clear().type('good').should('have.value', 'good');
    cy.get('input[type="date"]').clear().type('2025-10-04').should('have.value', '2025-10-04');

    cy.contains('button', 'Display Inputs').click();
    cy.contains('button', 'Clear Inputs').click();

    cy.get('input[type="number"]').should('have.value', '');
    cy.get('input[type="text"]').should('have.value', '');
    cy.get('input[type="password"]').should('have.value', '');
    cy.get('input[type="date"]').should('have.value', '');
  });

  it('Negative Case', () => {
     cy.get('input[type="number"]').clear().type('1234').should('have.value', '1234');
     cy.get('input[type="text"]').clear().type('qwerty').should('have.value', 'qwerty');
     cy.get('input[type="password"]').clear().type('bad').should('have.value', 'bad');
     cy.get('input[type="date"]').clear().type('2025-13-40').should('have.value','2025-13-40');

     cy.contains('button', 'Display Inputs').click();
    cy.contains('button', 'Clear Inputs').click();

    cy.get('input[type="number"]').should('have.value', '');
    cy.get('input[type="text"]').should('have.value', '');
    cy.get('input[type="password"]').should('have.value', '');
    cy.get('input[type="date"]').should('have.value', '');

  });

});






