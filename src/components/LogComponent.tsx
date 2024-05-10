// import dependencies
import React from "react";
import { Button } from "@/components/Button";
import { useMyContext } from "@/providers/context/context";

export const LogComponent = () => {
  //get enable log value
  const { enableLogs, updateValue } = useMyContext();

  return (
    <div>
      Store Logs
      <Button
        onClick={() => updateValue(!enableLogs)} // Set activeBtnId when button is clicked
        classname={"ml-4"}
        active={enableLogs}
      >
        {enableLogs ? "ON" : "OFF"}{" "}
        {/* Displaying person's name as button label */}
      </Button>
    </div>
  );
};
