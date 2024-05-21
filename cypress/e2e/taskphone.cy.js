describe('ProtoCommerce Site Test', () => {
    it('adds products to the cart and validates the cart total', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        cy.get('.card').each(($el, index, $list) => {
            const productName = $el.find('h4.card-title').text()
            if (productName.includes('iphone X')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('a.nav-link').contains('Checkout').click()
        cy.get('h4.media-heading').should('contain', 'iphone X')
        let sum = 0;
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text().split(' ')[1].trim()
            sum += Number(amount)
        }).then(() => {
            cy.get('h3 strong').should('contain', sum)
            cy.get(':nth-child(3) > :nth-child(5) > .btn').contains('Checkout').click()
            cy.get('#country').type('600026')
            cy.get('input[id="checkbox2"]').check({force: true})
            cy.get('.ng-untouched > .btn').contains('Purchase').click()
            cy.get('strong').should('have.text', 'Success!')
            cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
            cy.get(':nth-child(3) > :nth-child(5) > .btn').click()
            cy.get('strong').should('have.text',"Success!")
        })
    })
})