import { Route, Routes as ReactRoutes, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, LoginAluno, LoginProfessor, Private } from "../pages"
import { RequireAuth } from "../contexts";

export function AppRoutes() {
  return (
    <Router>
      <ReactRoutes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<Login />} />
        <Route path="/sign-up-student" element={ <LoginAluno /> } />
        <Route path="/sign-up-teacher" element={ <LoginProfessor /> } />
        <Route path="/private" element={ <RequireAuth> <Private/> </RequireAuth> } />
      </ReactRoutes>
    </Router>
  );
}
