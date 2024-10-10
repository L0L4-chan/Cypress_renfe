Feature: Loging process


@focus
Scenario Outline: Login
    Given I selected log in
    When I introduce wrong "<user>"
    And "<password>"
    * press enter
    * I solve the captcha
    Then I got a error message

Examples:
    | user            | password   |
    | pepe@gmail.com  | 123456Ee   |
    | pepe2@gmail.com | 123456Ee   |

