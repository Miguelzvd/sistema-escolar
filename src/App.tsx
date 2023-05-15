import { NavMobileContext } from "./contexts/";
import { AuthProvider } from "./contexts/Auth";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <NavMobileContext>
        <AppRoutes />
      </NavMobileContext>
    </AuthProvider>
  );
}

export default App;
