
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { User } from '../const/user';


const user = new User();


Given('I introduce the url on my browser',  ()=>
{
    user.goToHomepage.goToHomePage('es');
});

When('I reject the cookie settings', ()=>{
    user.goToHomepage.passCookieSettings();
});

Then('I access the home page', ()=>{
    user.goToHomepage.checkCookiesClose();
    user.goToHomepage.checkHomePage();
});


Given('I am on a Renfe homepage',()=>{
    user.goToHomepage.goToHomePage('es');
    user.goToHomepage.passCookieSettings();
    user.goToHomepage.checkHomePage();
})

When('I press {string}',(key)=>{
    user.forSurfing.goTo(key);

})

Then('I visit the {string} page',(value)=>{
    user.forSurfing.checkDestination(value);
})
