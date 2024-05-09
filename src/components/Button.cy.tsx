import React from "react";
import { Button } from "./Button";

describe("<Button />", () => {
  it("renders without errors", () => {
    cy.mount(<Button />);
    cy.get("button").should("exist");
  });

  it("applies default styles", () => {
    cy.mount(<Button />);
    cy.get("button").should("have.class", "px-2");
    cy.get("button").should("have.class", "py-1");
    cy.get("button").should("have.class", "border");
    cy.get("button").should("have.class", "border-black");
  });

  it("applies custom classname if provided", () => {
    const customClassname = "custom-class";
    cy.mount(<Button classname={customClassname} />);
    cy.get("button").should("have.class", customClassname);
  });

  it("applies active styles if active prop is true", () => {
    cy.mount(<Button active />);
    cy.get("button").should("have.class", "bg-[#5351b3]");
    cy.get("button").should("have.class", "text-[#f2f2ff]");
  });

  it("calls onClick handler when button is clicked", () => {
    const onClickStub = cy.stub();
    cy.mount(<Button onClick={onClickStub} />);
    cy.get("button")
      .click()
      .then(() => {
        expect(onClickStub).to.be.calledOnce;
      });
  });
});
