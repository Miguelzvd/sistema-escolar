import { AuthProvider } from "./contexts/Auth";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AuthProvider>
        <AppRoutes />
    </AuthProvider>
  );
}

export default App;
