
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { Compras } from './compras';

const aux =  new Compras()
const data = cy.fixture('languages.json')

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

    cy.url().endWith(data.Language1);
} )

When('I click on the language icon',()=>{
aux.clickOnLanguages(data);
    
} )

And('select "<Language2>"',()=>{

    cy.get(data.Language2).click();
})

Then('the url ends with "<code>"',()=>{

    cy.url().endWith(data.code);
})

Given('I am on a page in the renfe web site', ()=>{
    aux.goToHomePage();


})

When('I introduce the necessary info', ()=>{
    aux.fillUpTravelInfo();
} )

And('press "Buscar billete"', ()=>{
  
    cy.get('.mdc-button_touchsc-rf-button').click();
} )

Then('I see differents options', ()=>{
    cy.get('#listaTrenerTBodyIda').should('be.visible');
})