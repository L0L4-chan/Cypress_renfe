Feature: Navigation on the website 


Scenario: Access to home page
  Given I am on the Renfe website    
  When I reject the cookie settings
  Then I access the home page

  
Scenario Outline: Visit different link on Renfe website
    Given I am on the Renfe website
    When I press the button "<Key>"
    Then I visit the "<Value>" page

Examples:
    | Key         | Value        |
    | 2           | descuentos   |

