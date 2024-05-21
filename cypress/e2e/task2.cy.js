
describe('My Test Suite', () => {
    it('Should open the website', () => {
     
      cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
      cy.get(':nth-child(1) > .card > .card-footer > .btn').eq(0).click();
      cy.get(':nth-child(4) > .card > .card-footer > .btn').click(); 
      cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
      cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
      cy.get('#country').type('626124')
      cy.get('.ng-untouched > .btn').click()
      cy.get('strong').should('have.text','Success!')
    });
  
  });