//*[@id="customers"]/tbody/tr[2]/td

import iterator from '../helper/iteration-helper'

describe('example to-do app', () => {


    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    beforeEach(() => {
        cy.visit('https://chercher.tech/practice/practice-dropdowns-selenium-webdriver')
    })


    it.only('drop down select for index', () => {
        cy.get('#animals > option')
            .eq(2).then(($el) => {

                const txt = $el.text();
                cy.wrap(txt).as('text')
                cy.wrap($el).parent('select').select($el.val())
            })

        cy.get('@text').then(text => {
            expect(text).to.contain("Big Baby Cat")
        });
    })
})