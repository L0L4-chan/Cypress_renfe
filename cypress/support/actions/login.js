export class Login {
  elements = {
    direccion: () => cy.url(),
    mail: () => cy.get("#num_tarjeta", {timeout: 3000}),
    password: () => cy.get("#pass-login", {timeout: 3000}),
    entrar: () => cy.get("#loginButtonId", {timeout: 3000}),
    recordar: () => cy.get("#pruebaSpace > div:nth-child(1) > div > a", {timeout: 3000}),
    nuevoUsuario: () => cy.get("#signupButton", {timeout: 3000}),
    warning: () => cy.get("#modalGeneric > div > div", {timeout: 3000}),
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
