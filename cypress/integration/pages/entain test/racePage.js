/// <reference types="cypress" />

export class racePage {

    static elements = {
        totalRaceElements: () => cy.xpath("// div[@id='container']/div[contains(@class,'race-summary')]"),
        timeOfEachRaceElements: () => cy.xpath("// div[@id='container']/div[contains(@class,'race-summary')]/p[2]"),
        titleOfEachRaceElements: () => cy.xpath("// div[@id='container']/div[contains(@class,'race-summary')]/h3"),
        raceNumberOfEachRaceElements: () => cy.xpath("// div[@id='container']/div[contains(@class,'race-summary')]/p[1]"),

    }

    static selectRaceTypeCheckbox(racetype) {
        return cy.xpath("//label[text()='" + racetype + "']/parent::div[@class='v-input__slot']//input")
    }

    static verifyDataIsSortedAscendingly(elements) {
        elements.should('be.visible')
        elements.should(($timeLeft) => {
            const innerText = (el) => el.innerText;
            const minutes = (text) => text.split(' ')[0];
            const seconds = (text) => text.split(' ')[1];
            const justDigits = (str) => str.replace(/[a-z]/g, '');
            const timeSign = (sign) => Math.sign(sign);

            const raceTime = Cypress._.map($timeLeft, ($time) => ((parseInt(justDigits(minutes(innerText($time))))) * 60) + (parseInt(justDigits(seconds(innerText($time)))) * timeSign(parseInt(justDigits(minutes(innerText($time)))))))

            // sorting the race time ascendingly
            const sorted = Cypress._.sortBy(raceTime);
            expect(sorted).to.deep.equal(raceTime);

        })
    }

}
