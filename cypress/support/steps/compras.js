export class Compras{

goToHomePage(){
    cy.visit('https://www.renfe.com/es/es');
}

passCookieSettings(){
    cy.window().then((win) => { //recoge el pop up
        cy.stub(win, 'prompt').returns('gfg');
        cy.get('#onetrust-reject-all-handler').click();

 });}



clickOnLanguages(){
cy.get('button[aria-label="Selector de idiomas"]')
.should('be.visible')
.click();
cy.get('#languageList').should('be.visible');

}

fillUpTravelInfo(){
    //escogemos origen y destino
    cy.get('#origin').click();
    cy.get('#awesomplete_list_1_item_0').click({ force: true });
    cy.get('#destination').click();
    cy.get('#awesomplete_list_2_item_2').click({ force: true });
    //escogemos fecha de viaje
    cy.get('#first-input').trigger('mouseover').click();
    cy.get('#daterangev2 > section > div.lightpick__inner > div.lightpick__months > section:nth-child(1) > div.lightpick__days > div:nth-child(6)').trigger('mouseover').click();
    cy.get('#daterangev2 > section > div.lightpick__inner > div.lightpick__months > section:nth-child(1) > div.lightpick__days > div:nth-child(19').trigger('mouseover').click();

    cy.get('#daterangev2 > section > div.lightpick__footer-buttons > button.lightpick__apply-action-sub').click();
}

}