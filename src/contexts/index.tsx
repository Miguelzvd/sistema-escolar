/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { NavMobileProvider } from "../contexts";

export * from "./NavMobileContext"

export function AppContexts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMobileProvider>{children}</NavMobileProvider>
    </>
  );
}
