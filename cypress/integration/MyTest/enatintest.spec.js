/// <reference types="cypress" />

import { racePage } from "../pages/entain test/racePage"

describe('example to-do app', () => {


    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('http://localhost:8081/#/')
    })

    it('Number of races and  race sorting test', () => {
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());
        // Harness & Thoroughbred & Greyhound checked
        racePage.elements.totalRaceElements().should('be.visible').should('have.length', 5);
        // Harness & Thoroughbred checked
        racePage.selectRaceTypeCheckbox('Greyhound').uncheck({ force: true });
        racePage.elements.totalRaceElements().should('be.visible').should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());

        //  Thoroughbred checked
        racePage.selectRaceTypeCheckbox('Harness').uncheck({ force: true });
        racePage.elements.totalRaceElements().should('be.visible').should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());

        // Harness checked
        racePage.selectRaceTypeCheckbox('Harness').check({ force: true });
        racePage.selectRaceTypeCheckbox('Thoroughbred').uncheck({ force: true });
        racePage.elements.totalRaceElements().should('be.visible').should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());

        // Greyhound checked
        racePage.selectRaceTypeCheckbox('Greyhound').check({ force: true });
        racePage.selectRaceTypeCheckbox('Harness').uncheck({ force: true });
        racePage.selectRaceTypeCheckbox('Thoroughbred').uncheck({ force: true });
        racePage.elements.totalRaceElements().should('be.visible').should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());

        // Greyhound & Thoroughbred checked
        racePage.selectRaceTypeCheckbox('Thoroughbred').check({ force: true });
        racePage.elements.totalRaceElements().should('be.visible').should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());

        // Greyhound & Harness checked
        racePage.selectRaceTypeCheckbox('Harness').check({ force: true });
        racePage.selectRaceTypeCheckbox('Thoroughbred').uncheck({ force: true });
        racePage.elements.totalRaceElements().should('be.visible').should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());
    })

    it('Verify race meeting name for respective race type', () => {

        //Greyhound
        racePage.selectRaceTypeCheckbox('Greyhound').check({ force: true });
        racePage.selectRaceTypeCheckbox('Harness').uncheck({ force: true });
        racePage.selectRaceTypeCheckbox('Thoroughbred').uncheck({ force: true });
        racePage.elements.titleOfEachRaceElements().should('be.visible');

        racePage.elements.titleOfEachRaceElements().each(($el, index, $list) => {

            expect(Cypress.$($el).text()).to.contain('Greyhound');
        })

        //Harness
        racePage.selectRaceTypeCheckbox('Greyhound').uncheck({ force: true });
        racePage.selectRaceTypeCheckbox('Harness').check({ force: true });
        racePage.selectRaceTypeCheckbox('Thoroughbred').uncheck({ force: true });
        racePage.elements.titleOfEachRaceElements().should('be.visible');

        racePage.elements.titleOfEachRaceElements().each(($el, index, $list) => {

            expect(Cypress.$($el).text()).to.contain('Harness');
        })

        //Thoroughbred
        racePage.selectRaceTypeCheckbox('Greyhound').uncheck({ force: true });
        racePage.selectRaceTypeCheckbox('Harness').uncheck({ force: true });
        racePage.selectRaceTypeCheckbox('Thoroughbred').check({ force: true });
        racePage.elements.titleOfEachRaceElements().should('be.visible');

        racePage.elements.titleOfEachRaceElements().each(($el, index, $list) => {

            expect(Cypress.$($el).text()).to.contain('Thoroughbred');
        })
    })


    it('Verify Race details', () => {
        //Race Number
        racePage.elements.raceNumberOfEachRaceElements().each(($el, index, $list) => {
            expect(Cypress.$($el).text()).to.match(/Race ([0-9]+)/);
        })

        // Race Time
        racePage.elements.timeOfEachRaceElements().each(($el, index, $list) => {

            expect(Cypress.$($el).text()).to.match(/([-]*)([0-9]+)([ms]+)/);
        })

        //Race Meeting Name
        racePage.elements.titleOfEachRaceElements().each(($el, index, $list) => {

            expect(Cypress.$($el).text()).to.match(/([A-Za-z]+)/);
        })

    })



    it('Verify race shouldnt show after 1 minute from start time', () => {

        racePage.elements.timeOfEachRaceElements().each(($el, index, $list) => {
            expect(Cypress.$($el).text()).to.not.match(/-([1-9]+)m ([0-9]+)s/);
        })
    })
})