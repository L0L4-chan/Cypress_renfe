import { should } from "chai"

export class Payment{


    elements = {

        tablaDatosP : () =>  cy.get('body > article > div > div.row.ajustesMargenM > div.col-lg-8.ajustesPaddingM > div'),
        nombre : () =>  cy.get('#nombre0'),
        apellido : () =>  cy.get('#apellido10'),
        numID : () =>  cy.get('#documento0'),
        telefono : () =>  cy.get('#telefono0'),
        boton1 : () => cy.get('#submitpersonaliza'),
    }


personalData(name,surname, id,phone){

    this.elements.personalData().should('be.visible');
    this.elements.nombre().type(name);
    this.elements.apellido().type(surname);
    this.elements.numID().type(id);
    this.elements.telefono().type(phone);
    
}

sendPD(){
    this.elements.boton1().should('be.visible').click();
}

correctPersonalData(){
    cy.get('#check-circle-green-v10').should('be.visible');
}

errorPersonalData(error){
    cy.get('#check-circle-green-v10').should('not.be.visible');
    switch(error){
        case 3:
            cy.get('#errordocumento0').should('be.visible');
            break;

        case 1:
            cy.get('#errornombre0').should('be.visible');
            break;

        case 2:
            cy.get('#errorapellido10').should('be.visible');
            break;
        
        case 4:
            cy.get('#errortelefono0').should('be.visible');
            break;

    }

}



}

