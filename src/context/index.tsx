import { NavMobileProvider } from "./NavMobileContext";

export function AppContext({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMobileProvider>{ children }</NavMobileProvider>
    </>
  );
}
