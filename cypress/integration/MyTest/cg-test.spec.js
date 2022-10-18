/// <reference types="cypress" />

import { cgHomePage } from "../pages/cg-home-page"

describe('Car booking', () => {


    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://www.rentalcover.com/')
    })

    it('car booking quote', () => {

        cgHomePage.elements.countryRentingVehicleTextbox().click()
            .type('United States');
        cgHomePage.countryRentingVehicleOptions('United States').click();
        cgHomePage.elements.fromDate().click();
        cgHomePage.pickDatesForBooking();
        cgHomePage.countryOfResidenceChange('United States');
        cgHomePage.selectVeheicleType('car');
        cgHomePage.elements.getYourInstantQuoteButton().click();
        cy.contains('Policy Information & Payment', { timeout: 10000 })
    })
})

