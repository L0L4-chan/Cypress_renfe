export class Compras{
elements ={
origen : () =>  cy.get('#origin'),
destino : () =>  cy.get('#destination'),
calendario : () => cy.get(),
pasajeros : () =>  cy.get('#passangersSelection'),
cerrarfechas : () =>  cy.get('#daterangev2 > section > div.lightpick__footer-buttons > button.lightpick__apply-action-sub'),
cerrarpasajeros : ()=> cy.get('#passengersSelectionList > div > button.rf-passengers-alternative__button-list.rf-passengers-alternative__button-list--primary'),
buscar :() =>  cy.get('#ticketSearchBt > div > div > button > div.mdc-button__touch.sc-rf-button')
}

fillUpTravelInfo(origen, destino,date1, date2, type, pasanger ){
    //escogemos origen y destino
    this.selectOrigin(origen);
    this.selectDestination(destino);
    //escogemos fecha de viaje
    cy.get('#first-input').trigger('mouseover').click();
    if(date2 == null) {
        this.selectDate(date1);
    }else{
        this.selectDate(date1);
        this.selectDate(date2);
    } 
    this.elements.cerrarfechas().click();
    if(type!= null){  
        for(counter=0; 0< type.length; counter++){
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
 for(counter = 0; counter< pasanger; counter++){
    cy.get('#passengersSelectionList').find('li').eq(type).find('a').click(); 
 }
}

selectDate(date){
    cy.get('#daterangev2 > section > div.lightpick__inner > div.lightpick__months > section:nth-child(1) > div.lightpick__days > div:nth-child('+ date +')').trigger('mouseover').click(); 

}

startSearch(){
     this.elements.buscar().click();
}

}