import React from "react";
import { LogComponent } from "./LogComponent";

describe("<LogComponent />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LogComponent />);
  });
});
