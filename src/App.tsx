import { NavMobileContext } from "./contexts/";
import { AppRoutes } from "./routes";

function App() {
  return (
    <NavMobileContext>
      <AppRoutes />
    </NavMobileContext>
  );
}

export default App;
