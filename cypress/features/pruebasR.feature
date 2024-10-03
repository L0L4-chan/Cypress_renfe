Feature: Navigation on the website as guest
Scenario: Access to home page
    Given I introduce the url on my browser
    When I reject the cookie settings
    Then I access to the home page

Scenario Outline: Select language
    Given I am on the "<Language1>" setting
    When I click on the language icon
    And select "<Language2>"
    Then the url ends with "<code>"
Examples:
    |Language1|Language2|code|
    |es       |6        |en  |
    |en       |7        |fr  |
    |fr       |5        |gl  |
    |gl       |4        |eu  |
    |eu       |3        |va  |
    |va       |2        |ca  |
    |ca       |1        |es  |



Scenario: Simple search for a itinerary 
    Given I am on a page in the renfe web site
    When I introduce the necessary info
    And press "Buscar billete"
    Then I see differents options
    
Scenario: Search for a itinerary 
    Given I am on a renfe page
    When I  click on "Más opciones de búsqueda"
    And introduce the necessary info
    * press "Buscar billete"
    Then I see differents options


    