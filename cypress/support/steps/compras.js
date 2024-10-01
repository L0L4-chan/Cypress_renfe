export class Compras{

goToHomePage(){
    cy.visit('https://www.renfe.com/es/es');
}
passCookieSettings(){
    cy.window().then((win) => { //recoge el pop up
        cy.stub(win, 'prompt').returns('gfg');
        cy.get('#onetrust-reject-all-handler').click();

 });}



clickOnLanguages(data){
cy.get('.rf-language-submenu__icon icon-lenguage sc-rf-language-submenu').click();
cy.get('#LanguageList').should('be.visible');

}

fillUpTravelInfo(){
    //escogemos origen y destino
    cy.get('#origin-awe').click();
    cy.get('#awesmplete_list_1_item_0').click();
    cy.get('#destination').click();
    cy.get('#awesmplete_list_2_item_2').click();
    //escogemos fecha de viaje
    cy.get('rt-daterange-alternative_tag').click();
    cy.get('#lightpick_day is-available[data-time=1972859560000').click()
    cy.get('#lightpick_day is-available[data-time=1972859760000').click()
}

}