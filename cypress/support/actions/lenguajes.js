export class Lenguajes {
elements={
    menuIdiomas : () => cy.get('button[aria-label="Selector de idiomas"]'),
    listaIdiomas : () =>   cy.get('#languageList'),
    direccion : () =>  cy.url()
   
}

    clickOnLanguages(){
        
        this.elements.menuIdiomas().click();
        this.elements.listaIdiomas().should('be.visible');
        
        }

    checkLanguajeWeAreOn(codigo){
        this.elements.direccion().should('include', codigo);

    }

    changeLanguage(posicion){
         this.elements.listaIdiomas().find('li').eq(posicion).find('a').click(); 
    }
}