import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { User } from "../const/user";

const user = new User();

Given("I am on the {string} setting", languaje1 => {
  user.goToHomepage.goToHomePage(languaje1);
  user.goToHomepage.checkHomePage();
  user.languages.checkLanguajeWeAreOn(languaje1);
  user.languages.clickOnLanguages();
});

When("I select a {string}", languaje2 => {
  user.languages.changeLanguage(languaje2);
});

Then("the url ends with {string}", code => {
  user.languages.checkLanguajeWeAreOn(code);
});
