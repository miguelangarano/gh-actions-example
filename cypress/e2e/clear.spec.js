let TODO_ITEM_ONE = "buy some cheese";
let TODO_ITEM_TWO = "feed the cat";
let TODO_ITEM_THREE = "book a doctors appointment";

context("Clear completed button", function () {

  it("should be hidden when there are no items that are completed", function () {
    cy.contains("Sorry, something went wrong").should('not.exist')
    cy.get("@todos").eq(1).find(".toggle").check();

    cy.get(".clear-completed").should("be.visible").click();

    cy.get(".clear-completed").should("not.be.visible");
    cy.get(".clear-completed").should("be.visible");
  });
});
