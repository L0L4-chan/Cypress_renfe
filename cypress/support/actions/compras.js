export class Compras{
elements ={
origen : () =>  cy.get('#origin'),
destino : () =>  cy.get('#destination'),
calendario : () => cy.get(),
pasajeros : () =>  cy.get('#passangersSelection'),
cerrarfechas : () =>  cy.get('#daterangev2 > section > div.lightpick__footer-buttons > button.lightpick__apply-action-sub'),
cerrarpasajeros : ()=> cy.get('#passengersSelectionList > div > button.rf-passengers-alternative__button-list.rf-passengers-alternative__button-list--primary'),
buscar :() =>  cy.get('#ticketSearchBt > div > div > button > div.mdc-button__touch.sc-rf-button'),
opciones: ()=> cy.get('#stv-ida'),
avanzadas: () => cy.get('#search-more'),
noEnlace: ()=>  cy.get('#rf-check-box-trip-enlace > div > div > div > label'),
plazaH:()=> cy.get('#rf-check-box-trip-accesibility > div > div > div > label'),
asistencia:()=> cy.get('#rf-check-box-trip-assistence > div > div > div > label'),
horaIda:()=>cy.get('#rf-check-box-trip-time-go > div > div > div > label'),
horaVuelta:()=>cy.get('#rf-check-box-trip-time-round > div > div > div > label'),
listaTrenesIda :()=> cy.get('#listaTrenesTBodyIda')

}

fillUpTravelInfo(origen, destino,date1, date2, type, pasanger ){
    //escogemos origen y destino
    this.selectOrigin(origen);
    this.selectDestination(destino);
    //escogemos fecha de viaje
    cy.get('#first-input').trigger('mouseover').click();
    if(date2 == "") {
        this.selectDate(date1);
    }else{
        this.selectDate(date1);
        this.selectDate(date2);
    } 
    this.elements.cerrarfechas().click();
    if(type!= ""){  
        for(var counter=0; 0< type.length; counter++){
            this.selectPasanger(type[counter], pasanger[counter]);
        }
    this.elements.cerrarpasajeros().click();    
    }


}

selectOrigin(ciudad){
    this.elements.origen().click();
    cy.get('#awesomplete_list_1_item_'+ ciudad ).click({ force: true });
}

selectDestination(ciudad){
    this.elements.destino().click();
    cy.get('#awesomplete_list_2_item_'+ ciudad).click({ force: true });
}

selectPasanger(type,pasanger){
 this.elements.pasajeros().click(); 

 for(counter = 1; counter< parseInt(pasanger); counter++){
    cy.get('#passengersSelectionList').find('li').eq(type).find('a').click(); 
 }
}

selectDate(date){
    cy.get('#daterangev2 > section > div.lightpick__inner > div.lightpick__months > section:nth-child(1) > div.lightpick__days > div:nth-child('+ date +')').trigger('mouseover').click(); 

}

startSearch(){
     this.elements.buscar().click();
}

checkForResults(){
    this.elements.opciones().should('be.visible');
}

advanceOptions(){
    this.elements.avanzadas().click({force: true});
}

selectAdvances(link,h,assistence,go,goTime,back, backTime){
   var variables = {link,h,assistence,go,back};

    for(var i=0; i< variables.length;i++){
        switch(variables[i]){

            case("sinEnlace"):
                this.elements.noEnlace().click({force: true});
                break;
            case("H"):
                this.elements.plazaH().click({force: true});
                break;
            case("asistencia"):
                this.elements.asistencia().click({force: true});
                break;
            case("ida"):
                this.elements.horaIda().click({force: true});
                this.timeLimit(1, goTime);
                //todo poner la hora
                break;
            case("vuelta"):
                this.elements.horaVuelta().click({force: true});
                this.timeLimit(0, backTime);
                //todo poner la hora
                break;
        }
}


}


timeLimit(modo, hora){

    if(modo){

        for (var counter=0; counter< parseInt(hora); counter){
        cy.get('#idPreferenceAccesibility > div:nth-child(3) > fieldset > div > div.rf-preference-accesibility__trip > div > div > button:nth-child(3) > i').click({force: true});
        }
    }else{
        
        for (var counter=0; counter< parseInt(hora); counter){
        cy.get('#idPreferenceAccesibility > div:nth-child(3) > fieldset > div > div:nth-child(2) > div > div > div > button:nth-child(3) > i').click({force: true});
        }
    }
}


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
}

selectTickets(ida) {

    cy.get('#tren_1_item' + ida).click();
    
    // Cierra pop-ups antes de continuar
    //closePopUps();
    
    // Continuar con la selección de tickets
    cy.get('#planes-opciones_i_1 > div:nth-child(1)').should('exist').click({ force: true });
    cy.get('#planes-opciones_i_1 > div.estilo-box-card.seleccion-resumen-bottom.card.bg-light.mb-3.tarifaBasica > div.card-body')
        .should('exist')
        .click({ force: true });
    
    // Cerrar pop-ups después de la primera selección
    closePopUps();
    
    cy.get('#btnSeleccionar').should('be.visible').should('exist').click({ force: true });

    // Cerrar pop-ups nuevamente antes de continuar
    closePopUps();

    cy.get('#planes-opciones_v_1 > div:nth-child(2)').should('exist').click({ force: true });
    cy.get('#planes-opciones_i_1 > div.estilo-box-card.seleccion-resumen-bottom.card.bg-light.mb-3.tarifaBasica > div.card-body')
        .should('exist')
        .click({ force: true });
    
    // Cerrar pop-ups al final
    closePopUps();
    
    cy.get('#btnSeleccionar').should('be.visible').should('exist').click({ force: true });
}


}