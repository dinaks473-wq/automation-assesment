describe('Notification Message Testing', () => {

  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/notification-message-rendered');
  });

  it('Notification Message until success appears', () => {
    const maxAttempts = 5;

    for (let i = 1; i <= maxAttempts; i++) {
      cy.contains('Click here').click();

      cy.get('#flash', { timeout: 4000 }) 
        .should('be.visible')
        .then(($msg) => {
          const text = $msg.text().trim();
          cy.log(`Attempt ${i}: ${text}`);

          if (text.includes('Action successful')) {
            cy.log('Success message appeared!');
            return false;
          } else if (text.includes('Action unsuccessful')) {
            cy.log(' Failure message appeared, retrying...');
            cy.wait(500);
          } else {
            throw new Error('Unexpected message: ' + text);
          }
        });
    }
  });

});
