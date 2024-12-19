Feature: search for a ticket as non User

    Background:
        Given I am on the Renfe website 

  Scenario Outline: Simple search for an itinerary
    Given I introduce the necessary info: "<origen>", "<destination>", "<go>", "<back>", "<type>", "<passanger>"
    When I press "Buscar billete"
    Then I see different options

    Examples:
      | origen | destination | go  | back | type | passanger |
      | 1      | 2           | 17  | 20   |      |           |


  Scenario Outline: Search for an itinerary with more options
    Given I click on "Más opciones de búsqueda"
    And I introduce the necessary info: "<origen2>", "<destination2>", "<go2>", "<back2>", "<type2>", "<passanger2>", "<link>", "<h>", "<help>", "<goMin>", "<goTime>", "<backMin>", "<backTime>"
    When I press "Buscar billete"
    Then I see different options

    Examples:
      | origen2 | destination2 | go2  | back2 | type2 | passanger2 | link      | h   | help       | goMin | goTime | backMin | backTime |
      | 1       | 2            | 17   | 20    |       |            | sinEnlace |     |            |       |        |         |          |
      | 1       | 2            | 17   | 20    |       |            |           | H   | asistencia |       |        |         |          |

