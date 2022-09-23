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
        cy.visit('https://www.w3schools.com/html/html_tables.asp')
    })


    it.only('testing table  iteration', () => {
        var total = '123';
        var text;
        // iterator.test('//*[@id="customers"]/tbody/tr[2]/td').then((total) => {
        //     cy.log('inside:' + total);
        // })

        // cy.url().then(() =>{ 
        cy.xpath('//*[@id="customers"]/tbody/tr[2]/td').each(($el, index, $list) => {
            text = $el.text();
            total += text;
            cy.log('log:' + total);
            cy.pause();
        })
            .then(() => {
                cy.log('inside:' + total);


            })

        //})

        cy.log('outside:' + total);



        // cy.pause()
        // cy.intercept({
        //     url: 'https://analytics.nike.com/v1/t',
        //     headers: {
        //         'Referer': "https://www.nike.com/"
        //     }
        // }).as('alais')
        // cy.xpath('//a[@aria-label="main-menu, Men, Shop By Sport, Tennis"]').click({ force: true })
        // cy.wait('@alais')
        // cy.pause()


    })
})