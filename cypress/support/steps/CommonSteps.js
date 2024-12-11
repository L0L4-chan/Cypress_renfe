import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { User } from "../const/user";
//we include here repeat steps example give: 'we start on the home page'
const user = new User();

Given("I am on the Renfe website", () => {
  user.goToHomepage.goToHomePage("es");
  user.goToHomepage.passCookieSettings();
  user.goToHomepage.checkHomePage();
});

And("I solve the captcha", () => {
  cy
    .intercept("POST", "**/recaptcha/api/siteverify", {
      statusCode: 200,
      body: { success: true },
    })
    .as("recaptchaVerify");
  cy.get('iframe[src*="recaptcha"]').then($iframe => {
    $iframe.css("display", "none");
  });
});

/*
// Función para cerrar pop-ups si están visibles
closePopUps() {
    // Cierra el pop-up de Confirmación de Fare Upgrade si está visible
    cy.get('#aceptarConfirmacionFareUpgrade').should('exist').then(($el) => {
        if ($el.is(':visible')) {
            cy.wrap($el).click({ force: true });
        }
    });
    
    cy.get('#closeConfirmacionFareUpgrade > span').should('exist').then(($el) => {
        if ($el.is(':visible')) {
            cy.wrap($el).click({ force: true });
        }

    });

    cy.get('#modalGeneric > .modal-dialog > .modal-content > .modal-header > .close > span').should('exist').then(($el) => {
        if ($el.is(':visible')) {
            cy.wrap($el).click({ force: true });
        }

    });
    cy.get('#modalInciConf_i_1 > .modal-dialog > .modal-content > .modal-header > .close > span', { timeout: 0 })
    .then(($el) => {
      if ($el.is(':visible')) {
          cy.wrap($el).click({ force: true });
      }
     }).catch(() => {
      // Si no existe o no está visible, no se hace nada
    });
}*/
