// context.tsx

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of your context state
interface MyContextState {
  enableLogs: boolean;
}

// Define the shape of your context methods
interface MyContextActions {
  updateValue: (newValue: boolean) => void;
}

// Combine both state and actions into a single interface
interface MyContextType extends MyContextState, MyContextActions {}

// Create a new context with the combined interface
const MyContext = createContext<MyContextType | undefined>(undefined);

// Custom hook to consume the context
const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

// Create a custom provider component
const MyContextProvider = ({ children }: Props) => {
  // Define the state
  const [state, setState] = useState<MyContextState>({
    enableLogs: false,
    // Add initial values as needed
  });

  // Define methods to update the state
  const updateValue = (newValue: boolean) => {
    setState((prevState) => ({
      ...prevState,
      enableLogs: newValue,
    }));
  };

  // Combine state and methods into context value
  const contextValue: MyContextType = {
    ...state,
    updateValue,
  };

  // Provide context value to its children components
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyContextProvider, useMyContext };
