export class Payment {
  elements = {
    DataP: () => cy.get("body > article > div > div.row.ajustesMargenM > div.col-lg-8.ajustesPaddingM > div",
      {timeout: 10000  }),
    name: () => cy.get("#nombre0", { timeout: 10000 }),
    surname: () => cy.get("#apellido10", { timeout: 10000 }),
    numID: () => cy.get("#documento0", { timeout: 10000 }),
    phone: () => cy.get("#telefono0", { timeout: 10000 }),
    email: () => cy.get("#email0", { timeout: 10000 }),
    submitButton: () => cy.get("#submitpersonaliza", { timeout: 10000 }),
    correct: () => cy.get("#check-circle-green-v10", { timeout: 10000 }),

    errordocu: () => cy.get("#errordocumento0", { timeout: 10000 }),
    errorname: () => cy.get("#errornombre0", { timeout: 10000 }),
    erroremail: () => cy.get("#erroremail0", { timeout: 10000 }),
    errorsurname: () => cy.get("#errorapellido10", { timeout: 10000 }),
    errorphone: () => cy.get("#errortelefono0", { timeout: 10000 })
  };

  personalData(name, surname, id, email, phone) {
    this.elements.DataP().should("be.visible");
    this.elements.name().type(name);
    this.elements.surname().type(surname);
    this.elements.numID().type(id);
    this.elements.email().type(email);
    this.elements.phone().type(phone);
  }

  sendPD() {
    this.elements.submitButton().should("exist").click({ foce: true });
    this.elements.submitButton().should("exist").click({ foce: true });
  }

  correctPersonalData() {
    this.elements.correct().should("be.visible");
  }

  errorPersonalData(error) {
    this.elementes.correct().should("not.be.visible");
    switch (error) {
      case 1:
        this.elements.errorname().should("exist");
        break;
      case 2:
        this.elements.errorsurname.should("exist");
        break;
      case 3:
        this.elementes.errordocu().should("exist");
        break;
      case 4:
        this.elements.errorphone().should("exist");
        break;
      case 5:
        this.elements.erroremail().should("exist");
        break;
    }
  }
}
