describe('ui', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=ekaizenbuttoncomponent--primary&args=variant:primary;'
    )
  );
  it('should render the component', () => {
    cy.get('[ek-frontend-button]').should('exist');
  });
});
