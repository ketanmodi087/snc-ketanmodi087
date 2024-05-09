// import dependencies
import React, { useEffect } from "react";
import classNames from "classnames";
import { ClockComponentProps } from "@/utils/types";

// ClockComponent component definition
export const ClockComponent = ({ timeRef }: ClockComponentProps) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (timeRef.current) {
        timeRef.current.textContent = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} : ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [timeRef]);

  return (
    <div className={classNames("mr-16")}>
      <p ref={timeRef} />
    </div>
  );
};
