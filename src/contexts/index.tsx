import { NavMobileProvider } from "./NavMobileContext";
import React from "react";


export function AppContext({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMobileProvider>{children}</NavMobileProvider>
    </>
  );
}
