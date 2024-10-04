export class Compras{
elements ={
origen : () =>  cy.get('#origin'),
destino : () =>  cy.get('#destination'),
//calendario : () => 
pasajeros : () =>  cy.get('#passangersSelection')
//buscar : () => 
}

fillUpTravelInfo(){
    //escogemos origen y destino
    
    
    //escogemos fecha de viaje
    cy.get('#first-input').trigger('mouseover').click();
    cy.get('#daterangev2 > section > div.lightpick__inner > div.lightpick__months > section:nth-child(1) > div.lightpick__days > div:nth-child(6)').trigger('mouseover').click();
    cy.get('#daterangev2 > section > div.lightpick__inner > div.lightpick__months > section:nth-child(1) > div.lightpick__days > div:nth-child(19').trigger('mouseover').click();

    cy.get('#daterangev2 > section > div.lightpick__footer-buttons > button.lightpick__apply-action-sub').click();
}

selectOrigin(ciudad){
    this.elements.origen().click();
    cy.get('#awesomplete_list_1_item_'+ ciudad ).click({ force: true });
}

selectDestination(ciudad){
    this.elements.destino().click();
    cy.get('#awesomplete_list_2_item_'+ ciudad).click({ force: true });
}
/*
selectPasanger(type,pasanger){
 this.pasajeros.click(); 
 for(counter = 0; counter< pasanger; counter++){
    cy.get('#passengersSelectionList > ul > li:nth-child(1) > div.rf-passengers-alternative__counter > button:nth-child(3) > i')
 }




}

selectDate1(){

}
selectDate2(){

}*/

}