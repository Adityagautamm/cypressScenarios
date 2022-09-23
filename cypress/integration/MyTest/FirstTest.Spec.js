
/// <reference types="cypress" />
describe('example to-do app', () => {


  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
  })

    beforeEach(() => {
      cy.visit('https://www.nike.com/au/')
    })

 
    it.only('.focus() - focus on a DOM element', () => {
        cy.xpath('//a[@aria-label="Men"]').click({force: true})
        cy.pause()
        cy.intercept({ url: 'https://analytics.nike.com/v1/t',
        headers: {
          'Referer': "https://www.nike.com/"
        }      
      }).as('alais')
        cy.xpath('//a[@aria-label="main-menu, Men, Shop By Sport, Tennis"]').click({force: true})
        cy.wait('@alais')
        cy.pause()

      })
    })