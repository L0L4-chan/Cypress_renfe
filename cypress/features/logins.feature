Feature: Loging process

Background: 
    Given I am on the Renfe website
@focus
Scenario Outline: Fail login with wrong credentials
    Given I selected log in
    And I introduce wrong "<user>" and "<password>"
    When I press enter
    And I solve the captcha
    Then I got an error message

Examples:
    | user            | password   |
    | pepe@gmail.com  | 123456Ee   |
    | pepe2@gmail.com | 123456Ee   |

