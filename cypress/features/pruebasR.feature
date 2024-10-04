Feature: Navigation on the website as guest

@focus
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
    |es       |5        |en  |
    |en       |6        |fr  |
    |fr       |4        |gl  |
    |gl       |3        |eu  |
    |eu       |2        |va  |
    |va       |1        |ca  |
    |ca       |0        |es  |



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


    