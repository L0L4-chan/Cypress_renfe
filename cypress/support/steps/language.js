
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { User } from '../const/user';

const user = new User();



Given('I am on the {string} setting',(languaje1)=>{
    
    user.goToHomepage.goToHomePage(languaje1);
    user.goToHomepage.passCookieSettings();
    user.languages.checkLanguajeWeAreOn(languaje1);
    })

When('I click on the language icon',()=>{
    user.languages.clickOnLanguages();
    
} )

And('select {string}',(languaje2)=>{
    
    user.languages.changeLanguage(languaje2);
})


Then('the url ends with {string}',(code)=>{
    user.languages.checkLanguajeWeAreOn(code);
})