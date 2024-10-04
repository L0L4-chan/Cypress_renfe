export class Homepage{
    
    elements = {
    cabecera : () => cy.get('#contentPage'),
    banner : () =>  cy.get('#tns1-item0')
    }
    goToHomePage(end){
        cy.visit('https://www.renfe.com/es/'+end);
    }
    
    passCookieSettings(){
        cy.window().then((win) => { //recoge el pop up
            cy.stub(win, 'prompt').returns('gfg');
            cy.get('#onetrust-reject-all-handler').click();
    
     })
     ;}
    
     checkCookiesClose(){
        cy.get('#onetrust-banner-sdk').should('not.be.visible');;
     }

     checkHomePage(){
        this.elements.cabecera().should('be.visible');
        this.elements.banner().should('be.visible'); 
     }
    
   
}