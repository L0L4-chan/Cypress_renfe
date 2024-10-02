Feature: Navigation on the website as guest
Scenario: Access to home page
    Given I introduce the url on my browser
    When I reject the cookie settings
    Then I access to the home page

Scenario: Select language
    Given I am on the "<Language1>" setting
    When I click on the language icon
    And select "<Language2>"
    Then the url ends with "<code>"

    |Language1|Language2|code|
    |Spanish|English|en|
    |English|French|fr|
    |French|Galician|gl|
    |Galician|Basque|eu|
    |Basque|Valencian|va|
    |Valencian|Catalan|ca|
    |Catalan|Spanish|es|

Scenario: Simple search for a itinerary 
    Given I am on a page in the renfe web site
    When I introduce the necessary info
    And press "Buscar billete"
    Then I see differents options
    
Scenario: Search for a itinerary 
    Given I am on a renfe web site
    When I  click on "Más opciones de búsqueda"
    And introduce the necessary info
    * press "Buscar billete"
    Then I see differents options


    