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
        racePage.elements.totalRaceElements().should('have.length', 5);
        // Harness & Thoroughbred checked
        racePage.selectRaceTypeCheckbox('Greyhound').uncheck({ force: true });
        racePage.elements.totalRaceElements().should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());

        //  Thoroughbred checked
        racePage.selectRaceTypeCheckbox('Harness').uncheck({ force: true });
        racePage.elements.totalRaceElements().should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());

        // Harness checked
        racePage.selectRaceTypeCheckbox('Harness').check({ force: true });
        racePage.selectRaceTypeCheckbox('Thoroughbred').uncheck({ force: true });
        racePage.elements.totalRaceElements().should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());

        // Greyhound checked
        racePage.selectRaceTypeCheckbox('Greyhound').check({ force: true });
        racePage.selectRaceTypeCheckbox('Harness').uncheck({ force: true });
        racePage.selectRaceTypeCheckbox('Thoroughbred').uncheck({ force: true });
        racePage.elements.totalRaceElements().should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());

        // Greyhound & Thoroughbred checked
        racePage.selectRaceTypeCheckbox('Thoroughbred').check({ force: true });
        racePage.elements.totalRaceElements().should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());

        // Greyhound & Harness checked
        racePage.selectRaceTypeCheckbox('Harness').check({ force: true });
        racePage.selectRaceTypeCheckbox('Thoroughbred').uncheck({ force: true });
        racePage.elements.totalRaceElements().should('have.length', 5);
        racePage.verifyDataIsSortedAscendingly(racePage.elements.timeOfEachRaceElements());
    })
})