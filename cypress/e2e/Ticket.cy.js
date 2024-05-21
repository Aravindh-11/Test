describe('TicketNew', () => {
    it('should navigate to TicketNew.com', () => {
      cy.visit('https://www.ticketnew.com/')
      cy.get(':nth-child(2) > a > .MobileMovieCitySelector_topCityName__ZlICA').click()
      cy.get(':nth-child(2) > .H5RunningMovieV2_runningMovie__3_RWh > a > .H5RunningMovieV2_imgWrapper__inAMo > .bgImg').click()
      cy.get(':nth-child(2) > .MovieSessionsListing_col2__2vcaY > :nth-child(3) > .greenCol').click()
      cy.get(':nth-child(1) > .FixedSeating_rightRow__MQXfw > ul > :nth-child(5) > .FixedSeating_seatL___joUf > :nth-child(1) > .available').eq(0).click()
      cy.get('.Button_btn___t8GZ').click()
  
    })
  })