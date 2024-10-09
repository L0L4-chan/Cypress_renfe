
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { User } from '../const/user';

const user = new User();


Given('I have a list of possibles itineraries', ()=>{
    user.goToHomepage.goToHomePage('es');
    user.goToHomepage.passCookieSettings();
    user.goToHomepage.checkCookiesClose();
    user.goToHomepage.checkHomePage();
    user.shopping.fillUpTravelInfo('0', '2', '16', '19', '', '');
    user.shopping.startSearch();
    user.shopping.checkForResults();
})

When('I select {string}', (go)=>{
    user.shopping.selectTickets(go);

})

And('I introduce the wrong data: {string}, {string}, {string}, {string}', (name, surname, id, phone)=>{

    user.forPayment.personalData(name, surname, id, phone)
})

Then( ' I received error warning {int}',(error)=>{ 

    user.forPayment.errorPersonalData(error);

})