/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("display persons", () => {
    cy.wait(1000);
    cy.get(".mb-8 > :nth-child(2) > .px-2").click();
    cy.wait(1000);
    cy.get(".gap-2 > :nth-child(1)").click();
    cy.wait(2000);
    cy.get(".text-2xl").should("be.visible");
    cy.get(".gap-2 > :nth-child(2)").click();
    cy.get(".text-2xl").should("be.visible");
    cy.wait(4000);
    cy.get(".gap-2 > :nth-child(3)").click();
    cy.get(".mb-2").should("be.visible");
  });
});
