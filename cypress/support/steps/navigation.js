import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { User } from "../const/user";

const user = new User();

When("I reject the cookie settings", () => {
  user.goToHomepage.checkCookiesClose();
});

Then("I access the home page", () => {
  user.goToHomepage.checkHomePage();
});

Given("I am on a Renfe homepage", () => {
  user.goToHomepage.goToHomePage("es");
  user.goToHomepage.passCookieSettings();
  user.goToHomepage.checkHomePage();
});

When("I press the button {string}", key => {
  user.forSurfing.goTo(key);
});

Then("I visit the {string} page", value => {
  user.forSurfing.checkDestination(value);
});
