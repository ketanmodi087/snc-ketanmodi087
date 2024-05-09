import { useEffect } from "react";
import { Person } from "../common/person";
import { useMyContext } from "@/providers/context/context";

// Custom hook to log person details and time if logging is enabled
export function usePersonDetailsLogger(
  personDetails: Person,
  time: HTMLElement | any,
) {
  // Accessing enableLogs state from context
  const { enableLogs } = useMyContext();

  // Effect hook to run logging when personDetails or enableLogs change
  useEffect(() => {
    // Checking if logging is enabled and personDetails is provided
    if (enableLogs && personDetails) {
      // Logging person details
      console.log("HERE IS YOUR USER ===> ", personDetails);
      // Logging time
      console.log("HERE IS YOUR TIME ===> ", time?.current?.textContent);
    }
  }, [personDetails, enableLogs, time]);

  return;
}
