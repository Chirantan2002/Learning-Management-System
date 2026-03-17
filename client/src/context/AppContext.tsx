'use client';
import { createContext, ReactNode } from "react";

type AppContextValue = Record<string, never>;

export const AppContext = createContext<AppContextValue | null>(null);

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const value: AppContextValue = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
