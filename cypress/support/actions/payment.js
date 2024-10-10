import { should } from "chai"

export class Payment{


    elements = {

        DataP : () =>  cy.get('body > article > div > div.row.ajustesMargenM > div.col-lg-8.ajustesPaddingM > div'),
        name : () =>  cy.get('#nombre0'),
        surname : () =>  cy.get('#apellido10'),
        numID : () =>  cy.get('#documento0'),
        phone : () =>  cy.get('#telefono0'),
        email : () =>  cy.get('#email0'),
        submitButton : () => cy.get('#submitpersonaliza'),
    }


personalData(name,surname, id, email, phone){
    cy.wait(2500);
    this.elements.DataP().should('be.visible');
    this.elements.name().type(name);
    this.elements.surname().type(surname);
    this.elements.numID().type(id);
    this.elements.email().type(email)
    this.elements.phone().type(phone);
    
}

sendPD(){
    cy.wait(2000);
    this.elements.submitButton().should('exist').click({foce:true});
    cy.wait(2500);
    this.elements.submitButton().should('exist').click({foce:true});
}

correctPersonalData(){
    cy.get('#check-circle-green-v10').should('be.visible');
}

errorPersonalData(error){
    cy.get('#check-circle-green-v10').should('not.be.visible');
    
    switch(error){
        case 3:
            cy.get('#errordocumento0').should('exist');
            break;

        case 1:
            cy.get('#errornombre0').should('exist');
            break;

        case 2:
            cy.get('#errorapellido10').should('exist');
            break;
        
        case 4:
            cy.get('#errortelefono0').should('exist');
            break;
            
        case 5:
            cy.get('#erroremail0').should('exist');
            break;

    }

}



}

