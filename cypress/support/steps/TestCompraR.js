
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

//TODO CASOS DE NAVEGACIÓN Y FAIL LOGIN