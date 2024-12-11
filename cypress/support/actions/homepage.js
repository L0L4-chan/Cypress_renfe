export class Homepage {
  elements = {
    cabecera: () => cy.get("#contentPage", { timeout: 2500 }),
    banner: () => cy.get("#tns1-item0", { timeout: 2500 }),
    logIn: () =>
      cy.get(
        "#contentPage > div > div > div:nth-child(1) > div > div > div > div > div > div > rf-header-alternative > div > rf-header-top-alternative > div > div.rf-header__container > div > ul.rf-header__tools > li:nth-child(5) > a > i",
        { timeout: 2500 }
      ),
    captcha: () => cy.get("#onetrust-reject-all-handler", { timeout: 2500 }),
    banner: () => cy.get("#onetrust-banner-sdk", { timeout: 2500 })
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
    this.elements.banner().should("be.visible");
  }

  pressLogIn() {
    this.elements.logIn().click();
  }
}
