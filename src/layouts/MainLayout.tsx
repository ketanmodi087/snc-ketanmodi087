// import dependencies
import React, {
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";
import { fetchPerson } from "@/providers/query/person";
import { useQuery } from "@tanstack/react-query";
import { MainLayoutProps, MyAbortController } from "@/utils/types";
import { PersonCardSkeleton } from "@/components/PersonCardSkeleton";
import { PersonDataCard } from "@/components/PersonDataCard";
import { ErrorCard } from "@/components/ErrorCard";
import { ClockComponent } from "@/components/ClockComponent";
import { LogComponent } from "@/components/LogComponent";
import { usePersonDetailsLogger } from "@/utils/customHooks/useDetailLogger";
// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// MainLayout component definition
export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const timeRef = useRef<HTMLParagraphElement | null>(null);
  const [activeBtnId, setActiveBtnId] = useState<string>("");
  const controllerRef = React.useRef<MyAbortController | null>(null);

  const { data, error, refetch, isFetching } = useQuery({
    queryKey: ["fetchPerson"],
    queryFn: async () => {
      controllerRef.current = new AbortController();
      const signal = controllerRef?.current.signal;
      return await fetchPerson(activeBtnId, signal);
    },
    enabled: false,
    retry: false,
  });

  // Function to cancel the ongoing request
  const cancelRequest = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
  }, []);

  const handleChangeBtn = useCallback(
    (value: string) => {
      if (isFetching) {
        cancelRequest();
      }
      setTimeout(() => refetch(), 0);
      setActiveBtnId(value);
    },
    [isFetching, cancelRequest, refetch],
  );

  // Custom hook for data logging
  usePersonDetailsLogger(data, timeRef);

  return (
    // Main container with flex layout, centered content
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col items-center p-12",
      )}
    >
      <div className={classNames("mb-8 flex items-center")}>
        <ClockComponent timeRef={timeRef} />
        <LogComponent />
      </div>
      {/* Container for buttons with flex layout */}
      <div className={classNames("flex gap-2")}>
        {/* Mapping through Person data to render buttons */}
        {Object.values(Person).map((person) => (
          <Button
            key={person}
            onClick={() => handleChangeBtn(person)} // Set activeBtnId when button is clicked
            active={activeBtnId === person} // Set active state based on activeBtnId
          >
            {person} {/* Displaying person's name as button label */}
          </Button>
        ))}
      </div>
      <div className={classNames("mt-12")}>
        {isFetching && <PersonCardSkeleton />}
        {/* Display "Fetching" when data is being fetched */}
        {!isFetching && error && (
          <ErrorCard
            errorMessage="Sorry! We are unable to fetch data for this person."
            title="Error"
          />
        )}
        {/* Display "Error" if there is an error */}
        {!isFetching && !error && data && <PersonDataCard data={data} />}
        {/* Display data if available */}
      </div>
    </main>
  );
};
