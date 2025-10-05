describe('Add/Remove Elements Testing', () => {

  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/add-remove-elements');
  });

  it('Add elements', () => {
   
    cy.contains('button', 'Add Element').click();
    cy.contains('button', 'Add Element').click();
    cy.contains('button', 'Add Element').click();
    cy.get('.added-manually').should('have.length', 3);
  });

  it('Remove one element', () => {

    cy.contains('button', 'Add Element').click();
    cy.contains('button', 'Add Element').click();
    cy.get('.added-manually').first().click();
    cy.get('.added-manually').should('have.length', 1);
  });

  it('Remove all elements', () => {
    cy.contains('button', 'Add Element').click();
    cy.contains('button', 'Add Element').click();
    cy.get('.added-manually').each(($el) => {
      cy.wrap($el).click();
    });

    cy.get('.added-manually').should('have.length', 0);
  });

});
