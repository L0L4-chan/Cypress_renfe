
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { Compras } from './compras';

const aux =  new Compras();

let fixtureData;

Given('I introduce the url on my browser',  ()=>
{
    aux.goToHomePage();
});

When('I reject the cookie settings', ()=>{
    aux.passCookieSettings();
});

Then('I access to the home page', ()=>{
    cy.get('#onetrust-banner-sdk').should('not.be.visible');
});


Given('I am on the "<Language1>" setting',()=>{
        aux.goToHomePage();
        aux.passCookieSettings();
        cy.fixture('languages.json').then((fixtureData) =>{
        cy.url().should('include', fixtureData.Language1);
    })
})

When('I click on the language icon',()=>{
    aux.clickOnLanguages();
    
} )

And('select "<Language2>"',()=>{
    cy.fixture('languages.json').then((fixtureData) =>{
    cy.get( '#languageList > li:nth-child(6) > a').click();
})
})

Then('the url ends with "<code>"',()=>{
    cy.fixture('languages.json').then((fixtureData) =>{
        cy.url().should('include', fixtureData.code)
})
})

Given('I am on a page in the renfe web site', ()=>{
    aux.goToHomePage();
    aux.passCookieSettings();


})

When('I introduce the necessary info', ()=>{
    aux.fillUpTravelInfo();
} )

And('press "Buscar billete"', ()=>{
  
    cy.get('#ticketSearchBt > div > div > button > div.mdc-button__touch.sc-rf-button').click();
} )

Then('I see differents options', ()=>{
    cy.get('#stv-ida').should('be.visible');
})


Given('I am on a renfe page', ()=>{
    aux.goToHomePage();
    aux.passCookieSettings();


})

When('I  click on "Más opciones de búsqueda"', ()=>{
    cy.get('#search-more').click({force: true});
})

And('introduce the necessary info', ()=>{
    cy.get('#rf-check-box-trip-enlace > div > div > div > label').click({force: true});
    aux.fillUpTravelInfo();
} )

And('press "Buscar billete"', ()=>{
  
    cy.get('#ticketSearchBt > div > div > button > div.mdc-button__touch.sc-rf-button').click();
} )

Then('I see differents options', ()=>{
    cy.get('#stv-ida').should('be.visible');
})