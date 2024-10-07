export class Homepage{
    
    elements = {
    cabecera : () => cy.get('#contentPage'),
    banner : () =>  cy.get('#tns1-item0'),
    logIn :()=> cy.get('#contentPage > div > div > div:nth-child(1) > div > div > div > div > div > div > rf-header-alternative > div > rf-header-top-alternative > div > div.rf-header__container > div > ul.rf-header__tools > li:nth-child(5) > a > i')
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
    
    pressLogIn(){
        this.elements.logIn().click();

    }

   
}