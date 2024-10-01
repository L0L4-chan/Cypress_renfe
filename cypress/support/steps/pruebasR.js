
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { Auxiliares } from './auxiliares';

const aux =  new Auxiliares()


Given('I introduce the url on my browser',  ()=>
{
    aux.goToHomePage()
});

When('I reject the cookie settings', ()=>{
    aux.passCookieSettings()
});

Then('I access to the home page', ()=>{
    cy.get('#onetrust-banner-sdk').should('not.be.visible')
});

Given('I am on the "<Language1>" setting',()=>{

    cy.url().endWith();
} )

When('I click on the language icon',()=>{
aux.clickOnLanguages();
    
} )

And()