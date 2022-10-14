import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const eagleBotApiEndPoint = "http://localhost:5000/bots/";
let response = "";

Given(`I send a request to the eagle bot api for bot id {string}`, (id) => {
    cy.request(eagleBotApiEndPoint + id).as("apiData");
});

Then("I should get the response with no empty object", () => {
    cy.get("@apiData").its("body").should("not.contains", {
        id: "",
        location: "",
        time: "",
        road: "",
        directionOfTrafficFlow: "",
        rateOfTraffic: "",
        averageVehicleSpeed: "",
        classesVehicles: "",
    });
});

Then("response should contain all the json objects", () => {
    cy.get("@apiData").then((response) => {
        expect(response.body).to.have.all.keys(
            "id",
            "location",
            "time",
            "road",
            "directionOfTrafficFlow",
            "rateOfTraffic",
            "averageVehicleSpeed",
            "classesVehicles"
        );
    });
});
