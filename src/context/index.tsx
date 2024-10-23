"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// // Define the context value type
interface AppContextType {
  openSelectState: boolean;
  setOpenSelectState: (open: boolean) => void;
  selectedState: string;
  setSelectedState: (state: string) => void;
}

// Create a context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [openSelectState, setOpenSelectState] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<string>("Odisha");


  // Define the context value
  const contextValue: AppContextType = {
    openSelectState,
    setOpenSelectState,
    selectedState,
    setSelectedState,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

// Custom hook to use the AppContext
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
};
