// import dependancies
import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define props interface for MainLayout component
type MainLayoutProps = {};

// MainLayout component definition
export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  // State to manage active button ID
  const [activeBtnId, setActiveBtnId] = useState<string>("");

  return (
    // Main container with flex layout, centered content
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      {/* Container for buttons with flex layout */}
      <div className={classNames("flex gap-2")}>
        {/* Mapping through Person data to render buttons */}
        {Object.values(Person).map((person) => (
          <Button
            key={person}
            onClick={() => setActiveBtnId(person)}
            active={activeBtnId === person}
          >
            {person} {/* Displaying person's name as button label */}
          </Button>
        ))}
      </div>
    </main>
  );
};
