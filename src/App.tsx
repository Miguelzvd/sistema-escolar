import { AppContext } from "./context";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
