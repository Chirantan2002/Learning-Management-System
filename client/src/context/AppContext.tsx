"use client";
import { createContext, ReactNode, useContext } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import axios from "axios";

interface AppContextValue {
  backendUrl: string;
  getToken: () => Promise<string | null>;
  updateRoleToEducator: () => Promise<void>;
}

export const AppContext = createContext<AppContextValue | null>(null);

type Props = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
  const { getToken } = useAuth();
  const { user } = useUser();

  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

  const updateRoleToEducator = async () => {
    try {
      const token = await getToken?.();
      console.log("Token:", token);

      if (!token) {
        console.error(
          "No Clerk token available; ensure user is authenticated.",
        );
        return;
      }

      const { data } = await axios.get(
        `${backendUrl}/api/educator/update-role`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("Role updated:", data);
    } catch (err) {
      console.error("Failed to update role:", err);
    }
  };

  const value: AppContextValue = {
    backendUrl,
    getToken,
    updateRoleToEducator,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// custom hook for easy access
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppContextProvider");
  return context;
};
