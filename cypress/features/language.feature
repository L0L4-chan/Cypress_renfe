Feature: Selecct navigation language

Scenario Outline: Select language
    Given I am on the "<Language1>" setting
    When I select a "<Language2>"
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
