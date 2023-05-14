import { AppContexts } from "./contexts";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AppContexts>
        <AppRoutes />
    </AppContexts>
  );
}

export default App;
