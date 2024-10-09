
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { User } from '../const/user';

const user = new User();




Given('I am on a page in the Renfe website', ()=>{
    user.goToHomepage.goToHomePage('es');
    user.goToHomepage.checkHomePage();


})

When('I introduce the necessary info: {string}, {string}, {string}, {string}, {string}, {string}', (origen, destino, ida, vuelta, typo, pasajero)=>{
    user.shopping.fillUpTravelInfo(origen, destino, ida, vuelta, typo, pasajero);
} )

And('I press "Buscar billete"', ()=>{
  
    user.shopping.startSearch();
} )

Then('I see different options', ()=>{
    user.shopping.checkForResults();
})


Given('I am on a Renfe page', ()=>{
    user.goToHomepage.goToHomePage('es');
    user.goToHomepage.checkHomePage();


})

When('I click on "Más opciones de búsqueda"', ()=>{
    user.shopping.advanceOptions();
})

And('I introduce the necessary info: {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}', (origen2,destination2,go2,back2,tipo2,passanger2,link,h,help,goMin,goTime,backMin,backTime)=>{
    user.shopping.selectAdvances(link,h,help,goMin,goTime,backMin,backTime);
    user.shopping.fillUpTravelInfo(origen2,destination2,go2,back2,tipo2,passanger2);
} )

And('I press "Buscar billete"', ()=>{
    user.shopping.startSearch();
   
} )

Then('I see different options', ()=>{
    user.shopping.checkForResults();
})
