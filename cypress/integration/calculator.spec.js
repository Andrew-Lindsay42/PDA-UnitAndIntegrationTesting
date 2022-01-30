describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('#running-total').should('contain', '2')
  })

  it('should update display when arithmetic operator is clicked with result of operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#running-total').should('contain', '4')
  })

  it('should be able to chain together multiple operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '2')
  })

  it('should be able to calculate postive numbers', () => {
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '64')
  })

  it('should be able to calculate negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '-7')
  })

  it('should be able to calculate decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '1.5')
  })

  it('should be able to calculate using very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number3').click();
    cy.get('#number0').click();
    cy.get('#number4').click();
    cy.get('#number0').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '102030405000')
  })

  it('should return undefined when dividing by 0', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', 'undefined')
  })
})