describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
  });

  it("removes that post", () => {
    cy.visit("/");
    cy.getById("title").contains("Welcome to my Blog").should("be.visible");
  });
});
