
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

Then('I access to the home page', ()=>{
    usuario.paraIrHomepage.checkCookiesClose();
    usuario.paraIrHomepage.checkHomePage();
});


Given('I am on the {string} setting',(languaje1)=>{
    
    usuario.paraIrHomepage.goToHomePage(languaje1);
    usuario.paraIrHomepage.passCookieSettings();
    usuario.paraLenguajes.checkLanguajeWeAreOn(languaje1);
    })

When('I click on the language icon',()=>{
    usuario.paraLenguajes.clickOnLanguages();
    
} )

And('select {string}',(languaje2)=>{
    
    usuario.paraLenguajes.changeLanguage(languaje2);
})


Then('the url ends with {string}',(code)=>{
    usuario.paraLenguajes.checkLanguajeWeAreOn(code);
})

Given('I am on a page in the renfe web site', ()=>{
    usuario.paraIrHomepage.checkCookiesClose();
    usuario.paraIrHomepage.checkHomePage();


})

When('I introduce the necessary info', ()=>{
    usuario.paraComprar.fillUpTravelInfo();
} )

And('press "Buscar billete"', ()=>{
  
    cy.get('#ticketSearchBt > div > div > button > div.mdc-button__touch.sc-rf-button').click();
} )

Then('I see differents options', ()=>{
    cy.get('#stv-ida').should('be.visible');
})


Given('I am on a renfe page', ()=>{
    usuario.paraIrHomepage.checkCookiesClose();
    usuario.paraIrHomepage.checkHomePage();


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