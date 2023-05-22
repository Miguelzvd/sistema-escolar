import { Route, Routes as ReactRoutes, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, LoginAluno, LoginProfessor, Private } from "../pages"
import { RequireAuth } from "../contexts";
import { Notas, DiarioDeClasse } from "../pages/LoginAluno/components";




export function AppRoutes() {
  return (
    <Router>
      <ReactRoutes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<Login />} />
        <Route path="/signin-student" element={ <LoginAluno> <Notas/> </LoginAluno> } />
        <Route path="/notas" element={ <LoginAluno> <Notas/> </LoginAluno> } />
        <Route path="/diario-classe" element={ <LoginAluno> <DiarioDeClasse/> </LoginAluno> } />
        <Route path="/signin-teacher" element={ <LoginProfessor /> } />
        <Route path="/private" element={ <RequireAuth> <Private/> </RequireAuth> } />
      </ReactRoutes>
    </Router>
  );
}
