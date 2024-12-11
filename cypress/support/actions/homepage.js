export class Homepage {
  elements = {
    cabecera: () => cy.get("#contentPage", { timeout: 10000 }),
    banner: () => cy.get("#tns1-item0", { timeout: 10000 }),
    logIn: () =>
      cy.get(
        "#contentPage > div > div > div:nth-child(1) > div > div > div > div > div > div > rf-header-alternative > div > rf-header-top-alternative > div > div.rf-header__container > div > ul.rf-header__tools > li:nth-child(5) > a > i",
        { timeout: 10000 }
      ),
    captcha: () => cy.get("#onetrust-reject-all-handler", { timeout: 10000 }),
    banner: () => cy.get("#onetrust-banner-sdk", { timeout: 10000 })
  };
  goToHomePage(end) {
    cy.visit(end);
  }

  passCookieSettings() {
    cy.window().then(win => {
      //recoge el pop up
      cy.stub(win, "prompt").returns("gfg");
      this.elements.captcha().click();
    });
  }

  checkCookiesClose() {
    this.elements.banner().should("not.be.visible");
  }

  checkHomePage() {
    this.elements.cabecera().should("be.visible");
    this.elements.banner().should("not.be.visible");
  }

  pressLogIn() {
    this.elements.logIn().click();
  }
}
