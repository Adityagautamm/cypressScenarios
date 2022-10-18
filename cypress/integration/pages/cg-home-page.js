/// <reference types="cypress" />

export class cgHomePage {

    static elements = {
        countryRentingVehicleTextbox: () => cy.get("input[placeholder='Select or type a country']", { timeout: 10000 }),
        fromDate: () => cy.get("#QuoteForm_FromDate-datepicker", { timeout: 10000 }),
        getYourInstantQuoteButton: () => cy.get('.QuoteForm-submit', { timeout: 10000 }),
    }

    static countryRentingVehicleOptions(place) {
        return cy.xpath("//ul[@id='ui-id-1']/li/div[text()='" + place + "']", { timeout: 10000 });
    }
    static pickDatesForBooking() {
        cy.get('.ui-datepicker-next', { timeout: 10000 }).click();
        //selecting 10th of the month
        cy.get('.ui-datepicker-calendar').should('be.visible');
        cy.xpath('(//td[@data-handler="selectDay"])[10]').should('be.visible').first().click({ force: true });
        cy.xpath('(//td[@data-handler="selectDay"])[10]').should('be.visible').first().click({ force: true });
    }

    static countryOfResidenceChange(place) {
        cy.xpath('//a[@href="#QuoteForm-country-field"]', { timeout: 10000 }).click();
        cy.xpath('//input[@placeholder="Type a country"]', { timeout: 10000 }).click();
        cy.xpath('//input[@placeholder="Type a country"]', { timeout: 10000 }).type(place);
        cy.xpath("//ul[@id='ui-id-5']/li/div[text()='" + place + "']", { timeout: 10000 }).click();


    }

    static selectVeheicleType(vehicleType) {
        cy.xpath('//a[@href="#QuoteForm-vehicleType-field"]', { timeout: 10000 }).click();
        cy.get('.QuoteForm-vehicleType-select', { timeout: 10000 }).select(vehicleType);
    }

}