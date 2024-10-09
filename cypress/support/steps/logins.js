
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { User } from '../const/user';

const user = new User();


Given('I selected log in',()=>{
    user.goToHomepage.goToHomePage('es');
    user.goToHomepage.passCookieSettings();
    user.goToHomepage.checkHomePage();
    user.goToHomepage.pressLogIn();
    user.forLogin.checkLogInpage();
})

When('I introduce wrong {string}',(mail)=>{
    user.forLogin.introduceUser(mail);
})

And('{string}',(password)=>{
    user.forLogin.introducePassword(password);

})

And('press enter', ()=>{
    user.forLogin.logIn();
   
})

And('I solve the captcha', () => {
    cy.intercept('POST', '**/recaptcha/api/siteverify', {
        statusCode: 200,   
        body: { success: true }  
      }).as('recaptchaVerify'); 
      cy.get('iframe[src*="recaptcha"]').then($iframe => {
        $iframe.css('display', 'none');
})
});

Then('I got a error message',()=>{
    user.forLogin.errorWarning();
})

