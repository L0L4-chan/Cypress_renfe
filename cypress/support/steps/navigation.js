
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { User } from '../const/user';


const usuario = new User();


Given('I introduce the url on my browser',  ()=>
{
    usuario.paraIrHomepage.goToHomePage('es');
});

When('I reject the cookie settings', ()=>{
    usuario.paraIrHomepage.passCookieSettings();
});

Then('I access the home page', ()=>{
    usuario.paraIrHomepage.checkCookiesClose();
    usuario.paraIrHomepage.checkHomePage();
});


Given('I am on a Renfe homepage',()=>{
    usuario.paraIrHomepage.goToHomePage('es');
    usuario.paraIrHomepage.passCookieSettings();
    usuario.paraIrHomepage.checkHomePage();
})

When('I press {string}',(key)=>{
    usuario.paraNavegar.goTo(key);

})

Then('I visit the {string} page',(value)=>{
    usuario.paraNavegar.checkDestination(value);
})
