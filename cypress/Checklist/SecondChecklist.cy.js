/// <reference types="Cypress" />

describe('', () => {
    it('My Task Checklist', () => {
      cy.visit('https://microsoftedge.github.io/Demos/demo-to-do/')
      cy.get('label').type('3rd#')
      cy.get('[type="submit"]').click()
      
      cy.get('#new-task').type('4th*$')
      cy.get('[type="submit"]').click()

      cy.get(':nth-child(2) > label > .box').click()
      cy.get(':nth-child(2) > label > .box').click()

    })
})