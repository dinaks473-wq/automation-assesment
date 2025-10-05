describe('Dynamic Table Testing', () => {

  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/dynamic-table'); 
  });

  it('Dynamic Table Testing', () => {
   
    let cpuColIndex;
    cy.get('table thead th').each(($th, index) => {
      if ($th.text().trim() === 'CPU') {
        cpuColIndex = index;
      }
    })
    .then(() => {
        cy.get('table tbody tr').each(($row) => {
        const name = $row.find('td').eq(0).text().trim(); 
        if (name === 'Chrome') {
          const cpuValue = $row.find('td').eq(cpuColIndex).text().trim();
          cy.log(`Chrome CPU value from table: ${cpuValue}`);
          cy.get('.bg-warning.p-1')   
          .invoke('text')
          .then((labelText) => {
  });     }
      });
    });

  });

});
