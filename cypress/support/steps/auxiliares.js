export class Auxiliares{

goToHomePage(){
    cy.visit('https://www.renfe.com/es/es');
}
passCookieSettings(){
    cy.window().then((win) => { //recoge el pop up
        cy.stub(win, 'prompt').returns('gfg');
        cy.get('#onetrust-reject-all-handler').click();

 });}



clickOnLanguages(){
cy.get('.rf-language-submenu__icon icon-lenguage sc-rf-language-submenu').click();
cy.get('#LanguageList').should('be.visible');
}
}