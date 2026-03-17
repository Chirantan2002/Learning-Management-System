'use client';
import { createContext, ReactNode } from "react";

export const AppContext = createContext<any>(null);

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
