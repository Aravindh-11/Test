describe("login test practice",()=>{
    beforeEach(()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")
    })
    it("Negative username test cases given ",()=>{
        cy.get("#username").eq(0).type("incorrectUser")
        cy.get("input[type = 'password']").type("password123")
        cy.get("button[class ='btn']").click()
        cy.get("#error").should ('have.text','Your username is invalid!')

    })
    it("Negative username test cases given2 ",()=>{
      cy.get("#username").eq(0).type("student")
      cy.get("input[type = 'password']").type("12345")
      cy.get("button[class ='btn']").click()
      cy.get("#error").should ('have.text','Your password is invalid!')

  })
  it("Negative username test cases given others ways",()=>{
    cy.get("#username").eq(0).type("incorrectUser")
    cy.get('#password').type("password123")
    cy.get("button[class ='btn']").click()
    cy.get('#error').should ('have.text','Your username is invalid!')

})
})
