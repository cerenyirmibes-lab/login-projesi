describe('Login Formu Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Başarılı form doldurulduğunda submit edebiliyorum', () => {
    cy.get('input[type="email"]').type('test@mail.com');
    cy.get('input[type="password"]').type('123456');
    cy.get('input[type="checkbox"]').check();
    cy.get('button').should('not.be.disabled').click();
    cy.contains('Tebrikler').should('be.visible');
  });

  it('Hatalı durumlarda uyarılar görünüyor', () => {
    cy.get('input[type="email"]').type('yanlis-email');
    cy.contains('Geçerli bir email giriniz').should('be.visible');
    cy.get('button').should('be.disabled');
  });
});