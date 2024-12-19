export class Purchase {
  elements = {
    origen: () => cy.get("#origin",{timeout: 10000}),
    destination: () => cy.get("#destination",{timeout: 10000}),
    passanger: () => cy.get("#passangersSelection",{timeout: 10000}),
    closeDate: () => cy.get("#daterangev2 > section > div.lightpick__footer-buttons > button.lightpick__apply-action-sub",{timeout: 10000}),
    ClosedPassanger: () => cy.get( "#passengersSelectionList > div > button.rf-passengers-alternative__button-list.rf-passengers-alternative__button-list--primary"
      ,{timeout: 10000}),
    search: () => cy.get( "#ticketSearchBt > div > div > button > div.mdc-button__touch.sc-rf-button",{timeout: 10000}),
    options: () => cy.get("#stv-ida",{timeout: 10000}),
    advance: () => cy.get("#search-more",{timeout: 10000}),
    noLink: () => cy.get("#rf-check-box-trip-enlace > div > div > div > label",{timeout: 10000}),
    spotS: () => cy.get("#rf-check-box-trip-accesibility > div > div > div > label",{timeout: 10000}),
    help: () => cy.get("#rf-check-box-trip-assistence > div > div > div > label",{timeout: 10000}),
    goTime: () => cy.get("#rf-check-box-trip-time-go > div > div > div > label",{timeout: 10000}),
    backTime: () => cy.get("#rf-check-box-trip-time-round > div > div > div > label",{timeout: 10000}),
    listTrainsToGo: () => cy.get("#listaTrenesTBodyIda",{timeout: 10000}),
    applydate:() => cy.get(
      "#datepickerv2 > section > div.lightpick__footer-buttons > button.lightpick__apply-action-sub",{timeout: 10000}
    ),
    input:()=> cy.get("#first-input",{timeout: 10000}),
    addpassanger:() => cy.get("#passengersSelectionList",{timeout: 10000}),
    to_go: () => cy.get("#rf-check-box-trip-to-go > div > div > div > label",{timeout: 10000}),
    list1: () => cy.get("#awesomplete_list_1",{timeout: 10000}),
    list2: () => cy.get("#awesomplete_list_2", {timeout: 10000}),
    calendar: () => cy.get('[style="top: 250px; left: 1223.5px;"] > .lightpick__inner > .lightpick__months',{timeout: 10000}),
    popupclose: ()=>cy.get('#modalInciConf_i_1 > .modal-dialog > .modal-content > .modal-header > .close > span', {timeout:10000}), 
  };

  fillUpTravelInfo(origen, dest, date1, date2, type, passanger) {
    this.selectOrigin(origen);
    this.selectDestination(dest);

    this.elements.input().trigger("mouseover").click({ force: true });
    if (date2 == "") {
      this.selectGoDate();
  
      cy.get(
        `#datepickerv2 > section > div.lightpick__inner > div.lightpick__months > section > div.lightpick__days > div:nth-child(${date1})`,
        { timeout: 10000 }
      )
        .should('not.have.class', 'is-disabled') 
        .click({ force: true });
  
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
    this.elements.list1().should('be.visible').find('li[role="option"]').eq(town).click({ force: true });
  }

  selectDestination(town) {
    this.elements.destination().click();
    this.elements.list2().should('be.visible').find('li[role="option"]').eq(town).click({ force: true });
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
    this.elements.calendar().find("div.lightpick__days").contains(date).click({ force: true });
  }
  startSearch() {
    this.elements.search().click();
  }

  changePage() {
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
            "#idPreferenceAccesibility > div:nth-child(3) > fieldset > div > div.rf-preference-accesibility__trip > div > div > button:nth-child(3) > i",{timeout: 10000}
          )
          .click({ force: true });
      }
    } else {
      for (var counter = 0; counter < parseInt(time); counter) {
        cy
          .get(
            "#idPreferenceAccesibility > div:nth-child(3) > fieldset > div > div:nth-child(2) > div > div > div > button:nth-child(3) > i",{timeout: 10000}
          )
          .click({ force: true });
      }
    }
  }

  selectTickets(go) {
    node = 
    this.startMutationObserver(node, this.handlePopups)
    cy.get("#tren_i_" + go, {timeout: 10000}).click();
    cy
      .get(
        "#planes-opciones_i_2 > div.estilo-box-card.seleccion-resumen-bottom.card.bg-light.mb-3.tarifaBasica",{timeout: 10000}
      )
      .should("exist")
      .click({ force: true });
    cy.get("#btnSeleccionar").should("exist").click({ force: true });
    cy
      .get(".modal-footer > div > .container_check > .checkmark",{timeout: 10000})
      .should("exist")
      .click({ force: true });

    cy
      .get("#aceptarConfirmacionFareUpgrade",{timeout: 10000})
      .should("exist")
      .click({ force: true });
    cy.get('[style="margin: 0"] > #resumenSelected > .fluid-container > .total-slim > .rowitem2 > #btnSeleccionar').click({force: true}); 
  }

  confirmations() {

    cy
      .get(
        "#planes-opciones_i_1 > div.estilo-box-card.seleccion-resumen-bottom.card.bg-light.mb-3.tarifaBasica",{timeout: 10000}
      )
      .should("exist")
      .click({ force: true });

    cy
      .get(".modal-footer > div > .container_check > .checkmark", {timeout: 10000})
      .should("exist")
      .click({ force: true });
    cy
      .get("#aceptarConfirmacionFareUpgrade",{timeout: 10000})
      .should("exist")
      .click({ force: true });
    cy
      .get(
        "#modalInciConf_i_1 > .modal-dialog > .modal-content > .modal-header > .close ", {timeout: 10000}
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
      ,{timeout: 10000})
      .should("exist")
      .then($el => {
        if ($el.is(":visible")) {
          cy.wrap($el).click({ force: true });
        }
      });
  }

  startMutationObserver(targetNode, callback) {
    const config = { childList: true, subtree: true };

    this.observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          callback(mutation);
        }
      }
    });
    this.observer.observe(targetNode, config);
  }

  stopMutationObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

    handlePopups() {
      const targetNode = cy.get('body'); 
      this.actions.startMutationObserver(targetNode[0], (mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.classList.contains('modal_fade_show')) {//revisar como detectar pop ups
            cy.wrap(node).should('be.visible'); 
            cy.wrap(node).find('.close-button').click(); 
          }
        });
      });
    }
}
