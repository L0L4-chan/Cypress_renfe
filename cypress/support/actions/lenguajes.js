export class Lenguages {
  elements = {
    menuIdiomas: () => cy.get('button[aria-label="Selector de idiomas"]', {timeout: 3000}),
    listaIdiomas: () => cy.get("#languageList", {timeout: 3000}),
    direccion: () => cy.url(),
  };

  clickOnLanguages() {
    this.elements.menuIdiomas().click();
    this.elements.listaIdiomas().should("be.visible");
  }

  checkLanguajeWeAreOn(code) {
    this.elements.direccion().should("include", code);
  }

  changeLanguage(position) {
    this.elements.listaIdiomas().find("li").eq(position).find("a").click();
  }
}
