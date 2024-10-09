Feature: purchase a ticket

@focus
Scenario Outline:Purchase a ticket with wrong personal data
    Given I have a list of possibles itineraries
    When I select "<one>" 
    And  I introduce the wrong data: "<name>", "<surname>", "<id>", "<phone>" 
    Then I received error warning <error>

Examples:
    | one | name | surname | id       | phone     | error |
    | 1   | lo   | ha      | 5555584m | 620405683 | 3     |