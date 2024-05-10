import React, { useRef } from "react";
import { ClockComponent } from "./ClockComponent";

describe("<ClockComponent />", () => {
  it("renders without errors", () => {
    const timeRef = React.createRef();
    cy.mount(<ClockComponent timeRef={timeRef} />);
    cy.get("p").should("exist");
  });

  it("displays current time properly", () => {
    const timeRef = React.createRef();
    cy.clock(); // Freeze time

    cy.mount(<ClockComponent timeRef={timeRef} />);
    const now = new Date();
    const expectedTime = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} : ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    cy.get("p").should("contain.text", expectedTime);
  });

  it("updates time every second", () => {
    const timeRef = React.createRef();
    cy.clock(); // Freeze time

    cy.mount(<ClockComponent timeRef={timeRef} />);
    const now = new Date();
    let expectedTime = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} : ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    cy.get("p").should("contain.text", expectedTime);

    // Advance time by 1 second
    now.setSeconds(now.getSeconds() + 1);
    expectedTime = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} : ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    cy.tick(1000);
    cy.get("p").should("contain.text", expectedTime);
  });
});
