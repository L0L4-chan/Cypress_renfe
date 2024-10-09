Feature: Navigation on the website 


  Scenario: Access to home page
    Given I introduce the url on my browser
    When I reject the cookie settings
    Then I access the home page

  

Scenario Outline: Surfing
    Given I am on a Renfe homepage
    When I press "<Key>"
    Then I visit the "<Value>" page

Examples:
    | Key         | Value        |
    | 2           | descuentos   |

