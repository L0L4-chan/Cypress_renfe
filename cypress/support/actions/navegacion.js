export class Navegacion{
    elements = {
        submenu : ()=> cy.get('#contentPage > div > div > div.responsivegrid.aem-GridColumn.aem-GridColumn--default--12 > div > div:nth-child(4) > rf-card-container > div > div > div'),
        dirección: ()=> cy.url()
    }
 

goTo(posicion){
    this.elements.submenu().find('div').eq(posicion).should('be.visible').click(); 


}

checkDestination(value){
this.elements.dirección().should('include', value);
}



}
