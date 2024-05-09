// import dependencies
import React, { useEffect, useRef } from "react";
import classNames from "classnames";

// ClockComponent component definition
export const ClockComponent = () => {
  const timeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      if (timeRef.current) {
        timeRef.current.textContent = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} : ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Only run this effect once (on mount)

  return (
    <div className={classNames("mr-16")}>
      <p ref={timeRef} />
    </div>
  );
};
