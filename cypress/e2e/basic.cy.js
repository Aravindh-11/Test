describe('handle basic UI elements',()=>{
  it('Basic elements'),()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.title().should('incluse','Practice Page')
    cy.get('input[value="radio2"]').check.should('be.checked')
    cy.get('lable input[type ="checkboxes"]').check(["option1","option2"]).should('be.checked')
    cy.get('select').select('option3').should('have.value','option3')
    cy.get('fieldset #autocomple').type('au')
    cy.get('ui menu.item div').each(($suggestion)=>{
        if($suggestion.test().includes('Australia')){
            cy.warp($suggestion).click({force: true})
            cy.get ('fieldset #autocomple').should('have.value','Australia')
            cy.get('fieldset #opentab').invoke(removeAttr)
        }
    })

  }  
})
