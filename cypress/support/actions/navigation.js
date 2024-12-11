export class Navigation {
  elements = {
    submenu: () =>
      cy.get(
        "#contentPage > div > div > div.responsivegrid.aem-GridColumn.aem-GridColumn--default--12 > div > div:nth-child(4) > rf-card-container > div > div > div"
      , {timeout: 10000}),
    direction: () => cy.url(),
  };

  goTo(position) {
    this.elements
      .submenu()
      .find("div")
      .eq(position)
      .should("be.visible")
      .click();
  }

  checkDestination(value) {
    this.elements.direction().should("include", value);
  }
}
