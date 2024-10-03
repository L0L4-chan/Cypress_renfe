
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { Compras } from './compras';

const aux =  new Compras();

let fixtureData;

Given('I introduce the url on my browser',  ()=>
{
    aux.goToHomePage('es');
});

When('I reject the cookie settings', ()=>{
    aux.passCookieSettings();
});

Then('I access to the home page', ()=>{
    cy.get('#onetrust-banner-sdk').should('not.be.visible');
});


Given('I am on the {string} setting',(languaje1)=>{
    
        aux.goToHomePage(languaje1);
        aux.passCookieSettings();
       
        cy.url().should('include', languaje1);
    })

When('I click on the language icon',()=>{
    aux.clickOnLanguages();
    
} )

And('select {string}',(lenguaje2)=>{
    
    cy.get( '#languageList > li:nth-child('+ lenguaje2 +') > a').click();
})


Then('the url ends with {string}',(code)=>{
   
        cy.url().should('include',code )
})

Given('I am on a page in the renfe web site', ()=>{
    aux.goToHomePage('es');
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
    aux.goToHomePage('es');
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