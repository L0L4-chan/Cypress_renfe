export class Purchase {
  elements = {
    origen: () => cy.get("#origin",{timeout: 2500}),
    destination: () => cy.get("#destination",{timeout: 2500}),
    passanger: () => cy.get("#passangersSelection",{timeout: 2500}),
    closeDate: () => cy.get("#daterangev2 > section > div.lightpick__footer-buttons > button.lightpick__apply-action-sub",{timeout: 2500}),
    ClosedPassanger: () => cy.get( "#passengersSelectionList > div > button.rf-passengers-alternative__button-list.rf-passengers-alternative__button-list--primary"
      ,{timeout: 2500}),
    search: () => cy.get( "#ticketSearchBt > div > div > button > div.mdc-button__touch.sc-rf-button",{timeout: 2500}),
    options: () => cy.get("#stv-ida",{timeout: 2500}),
    advance: () => cy.get("#search-more",{timeout: 2500}),
    noLink: () => cy.get("#rf-check-box-trip-enlace > div > div > div > label",{timeout: 2500}),
    spotS: () => cy.get("#rf-check-box-trip-accesibility > div > div > div > label",{timeout: 2500}),
    help: () => cy.get("#rf-check-box-trip-assistence > div > div > div > label",{timeout: 2500}),
    goTime: () => cy.get("#rf-check-box-trip-time-go > div > div > div > label",{timeout: 2500}),
    backTime: () => cy.get("#rf-check-box-trip-time-round > div > div > div > label",{timeout: 2500}),
    listTrainsToGo: () => cy.get("#listaTrenesTBodyIda",{timeout: 2500}),
    applydate:() => cy.get(
      "#datepickerv2 > section > div.lightpick__footer-buttons > button.lightpick__apply-action-sub",{timeout: 2500}
    ),
    input:()=> cy.get("#first-input",{timeout: 2500}),
    addpassanger:() => cy.get("#passengersSelectionList",{timeout: 2500}),
    to_go: () => cy.get("#rf-check-box-trip-to-go > div > div > div > label",{timeout: 2500}),
  
  
  };

  fillUpTravelInfo(origen, dest, date1, date2, type, passanger) {
    this.selectOrigin(origen);
    this.selectDestination(dest);

    this.elements.input().trigger("mouseover").click();
    if (date2 == "") {
      this.selectGoDate();
      cy
        .get(
          "#datepickerv2 > section > div.lightpick__inner > div.lightpick__months > section > div.lightpick__days > div:nth-child(" +
            date1 +
            ")",{timeout: 2500}
        )
        .click();
        this.elements.applydate().should("exist").click({ force: true });
    } else {
      this.selectDate(date1);
      this.selectDate(date2);
      this.elements.closeDate().click();
    }
    if (type != "") {
      for (var counter = 0; 0 < type.length; counter++) {
        this.selectPasanger(type[counter], passanger[counter]);
      }
      this.elements.ClosedPassanger().click();
    }
  }

  selectOrigin(town) {
    this.elements.origen().click();
    cy.get("#awesomplete_list_1_item_" + town,{timeout: 2500}).click({ force: true });
  }

  selectDestination(town) {
    this.elements.destination().click();
    cy.get("#awesomplete_list_2_item_" + town,{timeout: 2500}).click({ force: true });
  }

  selectPasanger(type, pasanger) {
    this.elements.passanger().click();

    for (counter = 1; counter < parseInt(pasanger); counter++) {
      this.elements.addpassanger().find("li").eq(type).find("a").click();
    }
  }

  selectGoDate() {
    this.elements.to_go().should("exist").click({ force: true });
  }
  selectDate(date) {
    cy
      .get(
        "#daterangev2 > section > div.lightpick__inner > div.lightpick__months > section:nth-child(1) > div.lightpick__days > div:nth-child(" +
          date +
          ")", {timeout: 2500}
      )
      .trigger("mouseover")
      .click({ force: true });
  }
  startSearch() {
    this.elements.search().click();
  }

  changePage() {
    // permite que cypress siga operando en el nuevo dominio
    cy.origin("venta.renfe.com", () => {
      this.selectTickets();
    });
  }

  checkForResults() {
    this.elements.options().should("be.visible");
  }

  advanceOptions() {
    this.elements.advance().click({ force: true });
  }

  selectAdvances(link, h, assistence, go, goTime, back, backTime) {
    var variables = { link, h, assistence, go, back };

    for (var i = 0; i < variables.length; i++) {
      switch (variables[i]) {
        case "sinEnlace":
          this.elements.noLink().click({ force: true });
          break;
        case "H":
          this.elements.spotS().click({ force: true });
          break;
        case "asistencia":
          this.elements.help().click({ force: true });
          break;
        case "ida":
          this.elements.goTime().click({ force: true });
          this.timeLimit(1, goTime);
          //todo poner la hora
          break;
        case "vuelta":
          this.elements.backTime().click({ force: true });
          this.timeLimit(0, backTime);
          //todo poner la hora
          break;
      }
    }
  }

  timeLimit(mode, time) {
    if (mode) {
      for (var counter = 0; counter < parseInt(time); counter) {
        cy
          .get(
            "#idPreferenceAccesibility > div:nth-child(3) > fieldset > div > div.rf-preference-accesibility__trip > div > div > button:nth-child(3) > i",{timeout: 2500}
          )
          .click({ force: true });
      }
    } else {
      for (var counter = 0; counter < parseInt(time); counter) {
        cy
          .get(
            "#idPreferenceAccesibility > div:nth-child(3) > fieldset > div > div:nth-child(2) > div > div > div > button:nth-child(3) > i",{timeout: 2500}
          )
          .click({ force: true });
      }
    }
  }

  selectTickets(go) {
    cy.get("#tren_i_" + go, {timeout: 2500}).click();
    cy
      .get(
        "#planes-opciones_i_1 > div.estilo-box-card.seleccion-resumen-bottom.card.bg-light.mb-3.tarifaBasica",{timeout: 2500}
      )
      .should("exist")
      .click({ force: true });
    cy.get("#btnSeleccionar").should("exist").click({ force: true });
    cy
      .get(".modal-footer > div > .container_check > .checkmark",{timeout: 2500})
      .should("exist")
      .click({ force: true });
    cy
      .get("#aceptarConfirmacionFareUpgrade",{timeout: 2500})
      .should("exist")
      .click({ force: true });
    cy
      .get(
        "#modalInciConf_i_1 > .modal-dialog > .modal-content > .modal-header > .close ",{timeout: 2500}
      )
      .should("exist")
      .then($el => {
        if ($el.is(":visible")) {
          cy.wrap($el).click({ force: true });
        }
      });
    cy
      .get(
        "#modalGeneric > .modal-dialog > .modal-content > .modal-header > .close ",{timeout: 2500}
      )
      .should("exist")
      .then($el => {
        if ($el.is(":visible")) {
          cy.wrap($el).click({ force: true });
        }
      });
  }

  confirmations() {

    cy
      .get(
        "#planes-opciones_i_1 > div.estilo-box-card.seleccion-resumen-bottom.card.bg-light.mb-3.tarifaBasica",{timeout: 2500}
      )
      .should("exist")
      .click({ force: true });

    cy
      .get(".modal-footer > div > .container_check > .checkmark", {timeout: 2500})
      .should("exist")
      .click({ force: true });
    cy
      .get("#aceptarConfirmacionFareUpgrade",{timeout: 2500})
      .should("exist")
      .click({ force: true });
    cy
      .get(
        "#modalInciConf_i_1 > .modal-dialog > .modal-content > .modal-header > .close ", {timeout: 2500}
      )
      .should("exist")
      .then($el => {
        if ($el.is(":visible")) {
          cy.wrap($el).click({ force: true });
        }
      });
    cy
      .get(
        "#modalGeneric > .modal-dialog > .modal-content > .modal-header > .close "
      ,{timeout: 2500})
      .should("exist")
      .then($el => {
        if ($el.is(":visible")) {
          cy.wrap($el).click({ force: true });
        }
      });
  }
}
