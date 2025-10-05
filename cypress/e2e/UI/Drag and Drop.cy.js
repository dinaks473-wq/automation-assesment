describe('Drag and Drop Test', () => {
  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/drag-and-drop'); // replace with actual URL
  });

  it('Should drag element and drop correctly', () => {
    cy.get('#drag1').drag('#drop1'); // replace with actual IDs from the page
    cy.get('#drop1').should('contain.text', 'Dropped!');

   
  });
});
