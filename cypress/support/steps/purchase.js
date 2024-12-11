import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { User } from "../const/user";

const user = new User();

And("I have a list of possibles itineraries", () => {
  user.shopping.fillUpTravelInfo("0", "2", "23", "", "", "");
  user.shopping.startSearch();
  user.shopping.checkForResults();
});

And("I select the ticket {string}", go => {
  user.shopping.selectTickets(go);
});

When(
  "I introduce the wrong data: {string}, {string}, {string}, {string}, {string}",
  (name, surname, id, email, phone) => {
    user.forPayment.personalData(name, surname, id, email, phone);
  }
);

Then("I received error warning {int}", error => {
  user.forPayment.errorPersonalData(error);
});
