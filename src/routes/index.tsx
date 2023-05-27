import { Route, Routes as ReactRoutes, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, LoginAluno, LoginProfessor, Private } from "../pages"
import { RequireAuth } from "../contexts";
import { DadosPessoais, DiarioDeClasse, Notas, Relatorio } from "../pages/LoginAluno/pages";

export function AppRoutes() {
  return (
    <Router>
      <ReactRoutes>
        <Route index element={<Home />} />
        <Route path="signin" element={<Login />} />

        <Route path="student" element={<LoginAluno/>}>
          <Route index element={<Notas/>}/>
          <Route path="notas" element={<Notas/>}/>
          <Route path="diario-classe" element={<DiarioDeClasse/>}/>
          <Route path="dados-pessoais" element={<DadosPessoais/>}/>
          <Route path="relatorio-disciplina" element={<Relatorio/>}/>
        </Route>

        <Route path="signin-teacher" element={ <LoginProfessor /> } />
        <Route path="private" element={ <RequireAuth> <Private/> </RequireAuth> } />
      </ReactRoutes>
    </Router>
  );
}
