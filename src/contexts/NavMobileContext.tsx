import React, { createContext, useState, useContext } from "react";
import { INavMobileContext } from "../interfaces";

// Criando Contexto
const NavMobileContext = createContext<INavMobileContext>(null!);

// Componente que vai prover o contexto
export function NavMobileProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <NavMobileContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavMobileContext.Provider>
  );
}

export function useNavMobileContext() {
  return useContext(NavMobileContext);
}
