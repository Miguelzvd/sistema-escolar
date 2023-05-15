/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React, { createContext, useContext , useState } from "react";
import { INavMobileContext } from "../../interfaces";

const NavMobileContext = createContext<INavMobileContext | undefined>(undefined);

export function NavMobileProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <NavMobileContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavMobileContext.Provider>
  );
}

export function useNavMobileContext(){
    return useContext(NavMobileContext)!;
}
