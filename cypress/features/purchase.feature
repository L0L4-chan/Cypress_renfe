Feature: purchase a ticket
 
Background: 
    Given I am on the Renfe website
    Given I have a list of possibles itineraries


Scenario Outline:Purchase a ticket with wrong personal data    
    Given I select the ticket "<one>" 
    When  I introduce the wrong data: "<name>", "<surname>", "<id>", "<email>", "<phone>" 
    Then I received error warning <error>

Examples:
    | one | name   | surname       | id       | email         |phone      | error |
    | 1   | sdfg   | kiernsli      | 5555584m | lodfhfdges    | 620405683 | 3     |
    | 1   | sdfg   | kiernsli      | 5555584m | lodfhfdges    | 620405683 | 5     |
    | 1   | sdfg   | kiernsli      | 5555584m | lodfhfdges    | 05683     | 4     |