import { Route, Routes as ReactRoutes, BrowserRouter as Router } from "react-router-dom";
import { Home, LoginAluno, Login, LoginProfessor } from "../pages"

export function AppRoutes() {
  return (
    <Router>
      <ReactRoutes>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<Login />} />
        <Route path="sign-up-student" element={<LoginAluno />} />
        <Route path="sign-up-teacher" element={<LoginProfessor />} />
      </ReactRoutes>
    </Router>
  );
}
