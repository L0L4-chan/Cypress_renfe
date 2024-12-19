import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { User } from "../const/user";

const user = new User();

Given("I selected log in", { jiraKey: 'CALC-1234' },() => {
  user.goToHomepage.pressLogIn();
  user.forLogin.checkLogInpage();
});

And("I introduce wrong {string} and {string}", (mail, password) => {
  user.forLogin.introduceUser(mail);
  user.forLogin.introducePassword(password);
});

When("I press enter", () => {
  user.forLogin.logIn();
});

Then("I got an error message", () => {
  user.forLogin.errorWarning();
});
