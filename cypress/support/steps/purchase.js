import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { User } from "../const/user";

const user = new User();

Given("I have a list of possibles itineraries", () => {

  var dayout= new Date().getDay();
  var dayreturn = dayout+1;
  user.shopping.fillUpTravelInfo(1 ,2,dayout ,dayreturn , "", "");
  user.shopping.startSearch();
  user.shopping.checkForResults();
});

Given("I select the ticket {string}", go => {
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
