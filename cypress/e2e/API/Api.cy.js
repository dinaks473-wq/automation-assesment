// cypress/e2e/notesApi.cy.js
const baseUrl = '/notes/api';

describe('Notes API Automation', () => {
  let token;
  let noteId;

  before(() => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/users/login`,
      body: {
        username: Cypress.env('USERNAME'), // use env variable
        password: Cypress.env('PASSWORD')  // use env variable
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      token = res.body.token;
    });
  });

  it('Create Note', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/notes`,
      headers: { 'x-auth-token': token },
      body: { title: 'My First Note', content: 'This is a test note' }
    }).then((res) => {
      expect(res.status).to.eq(200);
      noteId = res.body.id;
    });
  });

  // other tests (Retrieve, Update, Delete) remain same
});
