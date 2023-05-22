import { Route, Routes as ReactRoutes, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, LoginAluno, LoginProfessor, Private } from "../pages"
import { RequireAuth } from "../contexts";
import { DiarioDeClasse, Notas } from "../pages/LoginAluno/components";




export function AppRoutes() {
  return (
    <Router>
      <ReactRoutes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<Login />} />

        <Route path="/student" element={<LoginAluno/>}>
          <Route index element={<Notas/>}/>
          <Route path="notas" element={<Notas/>}/>
          <Route path="diario-de-classe" element={<DiarioDeClasse/>}/>
        </Route>

        <Route path="/signin-teacher" element={ <LoginProfessor /> } />
        <Route path="/private" element={ <RequireAuth> <Private/> </RequireAuth> } />
      </ReactRoutes>
    </Router>
  );
}
