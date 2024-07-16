/// <reference types="Cypress" />

describe('', () => {
    it('My Task Checklist', () => {
      cy.visit('https://microsoftedge.github.io/Demos/demo-to-do/')
      cy.get('label').type('Assignment')
      cy.get('[type="submit"]').click()
      
      cy.get('#new-task').type('Worksheet')
      cy.get('[type="submit"]').click()

      cy.get(':nth-child(2) > label > .box').click()
      cy.get(':nth-child(2) > label > .box').click()

    })
})