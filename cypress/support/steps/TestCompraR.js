
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

Given('I am on a page in the Renfe website', ()=>{
    usuario.paraIrHomepage.goToHomePage('es');
    usuario.paraIrHomepage.checkHomePage();


})

When('I introduce the necessary info: {string}, {string}, {string}, {string}, {string}, {string}', (origen, destino, ida, vuelta, typo, pasajero)=>{
    usuario.paraComprar.fillUpTravelInfo(origen, destino, ida, vuelta, typo, pasajero);
} )

And('I press "Buscar billete"', ()=>{
  
    usuario.paraComprar.startSearch();
} )

Then('I see different options', ()=>{
    usuario.paraComprar.checkForResults();
})


Given('I am on a Renfe page', ()=>{
    usuario.paraIrHomepage.goToHomePage('es');
    usuario.paraIrHomepage.checkHomePage();


})

When('I click on "Más opciones de búsqueda"', ()=>{
    usuario.paraComprar.advanceOptions();
})

And('I introduce the necessary info: {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}', (origen2,destino2,ida2,vuelta2,tipo2,pasajero2,link,h,asistencia,idaMinima,horaIda,vueltaMinima,horaVuelta)=>{
    usuario.paraComprar.selectAdvances(link,h,asistencia,idaMinima,horaIda,vueltaMinima,horaVuelta);
    usuario.paraComprar.fillUpTravelInfo(origen2,destino2,ida2,vuelta2,tipo2,pasajero2);
} )

And('I press "Buscar billete"', ()=>{
    usuario.paraComprar.startSearch();
   
} )

Then('I see different options', ()=>{
    usuario.paraComprar.checkForResults();
})


Given('I selected log in',()=>{
    usuario.paraIrHomepage.goToHomePage('es');
    usuario.paraIrHomepage.passCookieSettings();
    usuario.paraIrHomepage.checkHomePage();
    usuario.paraIrHomepage.pressLogIn();
    usuario.paraLogin.checkLogInpage();
})

When('I introduce wrong {string}',(mail)=>{
    usuario.paraLogin.introduceUser(mail);
})

And('{string}',(password)=>{
    usuario.paraLogin.introducePassword(password);

})

And('press enter', ()=>{
    usuario.paraLogin.logIn();
   
})

And('I solve the captcha', () => {
    cy.intercept('POST', '**/recaptcha/api/siteverify', {
        statusCode: 200,   // Código de estado HTTP 200
        body: { success: true }  // Simular que el captcha fue exitoso
      }).as('recaptchaVerify'); // Nombrar la interceptación
      cy.get('iframe[src*="recaptcha"]').then($iframe => {
        $iframe.css('display', 'none');
})
});

Then('I got a error message',()=>{
    usuario.paraLogin.errorWarning();
})


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

Given('I have a list of possibles itineraries', ()=>{
    usuario.paraIrHomepage.goToHomePage('es');
    usuario.paraIrHomepage.passCookieSettings();
    usuario.paraIrHomepage.checkCookiesClose();
    usuario.paraIrHomepage.checkHomePage();
    usuario.paraComprar.fillUpTravelInfo('0', '2', '16', '19', '', '');
    usuario.paraComprar.startSearch();
    usuario.paraComprar.checkForResults();
})

When('I select {string}', (ida)=>{
    usuario.paraComprar.selectTickets(ida);

})

And('I introduce the wrong data: {string}, {string}, {string}, {string}', (name, surname, id, phone)=>{

    usuario.paraPago.personalData(name, surname, id, phone)
})

Then( ' I received error warning {int}',(error)=>{ 

    usuario.paraPago.errorPersonalData(error);

})