/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { NavMobileProvider } from "./NavMobileProvider";


export function NavMobileContext({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMobileProvider>{children}</NavMobileProvider>
    </>
  );
}
