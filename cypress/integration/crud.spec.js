describe('Notes', () => {
  const note = 'My note';
  const noteUpdate = 'My note updated';
  beforeEach(() => {
    cy.login();
  })

  it('CRUD a note', () => {
    cy.createsANote(note);
    cy.get('.list-group').should('contain', note)

    cy.editsANote(note, ' updated');
    cy.get(`.list-group:contains(${noteUpdate})`).should('be.visible')

    cy.deletesANote(noteUpdate);
    cy.get(`.list-group:contains(${noteUpdate})`).should('not.exist')
  })
})