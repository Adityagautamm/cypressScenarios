Feature: Eagle bot Api

    Scenario Outline: Verifying data from eagle bot api
    Given I send a request to the eagle bot api for bot id "<id>"
    Then I should get the response with no empty object
    And response should contain all the json objects

    Examples:
    | id   |
    | 1    |
    | 2    |
    | 3    |
    | 4    |