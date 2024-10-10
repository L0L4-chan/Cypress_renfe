Feature: search for a ticket as non User


 @focus
  Scenario Outline: Simple search for an itinerary
    Given I am on a page in the Renfe website
    When I introduce the necessary info: "<origen>", "<destination>", "<go>", "<back>", "<type>", "<passanger>"
    And I press "Buscar billete"
    Then I see different options

    Examples:
      | origen | destination | go  | back | type | passanger |
      | 0      | 2           | 16  | 19   |      |           |
      | 1      | 2           | 17  | 20   |      |           |
 
  @focus
  Scenario Outline: Search for an itinerary with more options
    Given I am on a Renfe page
    When I click on "Más opciones de búsqueda"
    And I introduce the necessary info: "<origen2>", "<destination2>", "<go2>", "<back2>", "<type2>", "<passanger2>", "<link>", "<h>", "<help>", "<goMin>", "<goTime>", "<backMin>", "<backTime>"
    And I press "Buscar billete"
    Then I see different options

    Examples:
      | origen2 | destination2 | go2  | back2 | type2 | passanger2 | link     | h   | help       | goMin | goTime | backMin | backTime |
      | 0       | 2            | 16   | 19    |       |            | sinEnlace|     |            |       |        |         |          |
      | 1       | 2            | 17   | 20    |       |            |          | H   | asistencia |       |        |         |          |

