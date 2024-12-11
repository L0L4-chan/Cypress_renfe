export class Login {
  elements = {
    direccion: () => cy.url(),
    mail: () => cy.get("#num_tarjeta", {timeout: 10000}),
    password: () => cy.get("#pass-login", {timeout: 10000}),
    entrar: () => cy.get("#loginButtonId", {timeout: 10000}),
    recordar: () => cy.get("#pruebaSpace > div:nth-child(1) > div > a", {timeout: 10000}),
    nuevoUsuario: () => cy.get("#signupButton", {timeout: 10000}),
    warning: () => cy.get("#modalGeneric > div > div", {timeout: 10000}),
  };

  checkLogInpage() {
    this.elements.direccion().should("include", "login");
  }

  introduceUser(user) {
    this.elements.mail().type(user);
  }

  introducePassword(password) {
    this.elements.password().type(password);
  }

  logIn() {
    this.elements.entrar().click();
  }

  errorWarning() {
    this.elements.warning().should("exist");
  }
}
