import React from "react";
import { ErrorCard } from "./ErrorCard";

describe("<ErrorCard />", () => {
  it("renders without errors", () => {
    const errorMessage = "This is an error message";
    const title = "Error Title";
    cy.mount(<ErrorCard errorMessage={errorMessage} title={title} />);
    cy.get("a").should("exist");
    cy.get("h5").should("contain.text", title);
    cy.get("p").should("contain.text", errorMessage);
  });

  it("renders default title and message if props are not provided", () => {
    cy.mount(<ErrorCard />);
    cy.get("a").should("exist");
    cy.get("h5").should("contain.text", "Something went wrong");
    cy.get("p").should("contain.text", "Something went wrong");
  });

  it("applies custom title and message if provided", () => {
    const errorMessage = "Custom error message";
    const title = "Custom Title";
    cy.mount(<ErrorCard errorMessage={errorMessage} title={title} />);
    cy.get("h5").should("contain.text", title);
    cy.get("p").should("contain.text", errorMessage);
  });
});
