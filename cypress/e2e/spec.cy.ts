describe("template spec", () => {
  beforeEach(() => {
    cy.task("reseed");
  });

  it("removes that post", () => {
    cy.visit("/");
    cy.get("h1").contains("Welcome to my Blog").should("be.visible");
    // TAR BORT DEN SKAPADE POSTEN ID:5
  });
});
