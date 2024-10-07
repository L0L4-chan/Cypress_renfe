Feature: Navigation on the website as guest


  Scenario: Access to home page
    Given I introduce the url on my browser
    When I reject the cookie settings
    Then I access the home page

  Scenario Outline: Select language
    Given I am on the "<Language1>" setting
    When I click on the language icon
    And select "<Language2>"
    Then the url ends with "<code>"

    Examples:
      | Language1 | Language2 | code |
      | es        | 5         | en   |
      | en        | 6         | fr   |
      | fr        | 4         | gl   |
      | gl        | 3         | eu   |
      | eu        | 2         | va   |
      | va        | 1         | ca   |
      | ca        | 0         | es   |


 
  Scenario Outline: Simple search for an itinerary
    Given I am on a page in the Renfe website
    When I introduce the necessary info: "<origen>", "<destino>", "<ida>", "<vuelta>", "<tipo>", "<pasajero>"
    And I press "Buscar billete"
    Then I see different options

    Examples:
      | origen | destino | ida | vuelta | tipo | pasajero |
      | 0      | 2       | 16  | 19     |      |          |
      | 1      | 2       | 17  | 20     |      |          |
 
  
  Scenario Outline: Search for an itinerary with more options
    Given I am on a Renfe page
    When I click on "Más opciones de búsqueda"
    And I introduce the necessary info: "<origen2>", "<destino2>", "<ida2>", "<vuelta2>", "<tipo2>", "<pasajero2>", "<link>", "<h>", "<asistencia>", "<idaMinima>", "<horaIda>", "<vueltaMinima>", "<horaVuelta>"
    And I press "Buscar billete"
    Then I see different options

    Examples:
      | origen2 | destino2 | ida2 | vuelta2 | tipo2 | pasajero2 | link     | h   | asistencia | idaMinima | horaIda | vueltaMinima | horaVuelta |
      | 0       | 2        | 16   | 19      |       |           | sinEnlace|     |            |           |         |              |            |
      | 1       | 2        | 17   | 20      |       |           |          | H   | asistencia |           |         |              |            |


@focus
Scenario Outline: Login
    Given I selected log in
    When I introduce wrong "<user>"
    And "<password>"
    * press enter
    Then I got a error message

Examples:
    | user            | password   |
    | pepe@gmail.com  | 123456Ee   |
    | pepe2@gmail.com | 123456Ee   |