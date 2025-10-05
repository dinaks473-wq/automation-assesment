 describe('Dynamic Pagination Table Testing', () => {

  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/dynamic-pagination-table'); 
  });
  
 it('Validate table rows', () => {
    cy.get('table tbody tr').each(($row) => {
      const gender = $row.find('td').eq(1).text().trim();
      expect(['Male', 'Female']).to.include(gender);
    });
  });

  it('Search for an existing student', () => {
    cy.get('input[type="search"]').clear().type('Alice Johnson');
    cy.get('table tbody tr').should('contain.text', 'Alice Johnson');
  });

  it('Change number of visible rows', () => {
    cy.get('.dataTables_length select').should('be.visible').select('5');
    cy.get('table tbody tr').should('have.length.at.most', 5);
  });
});
