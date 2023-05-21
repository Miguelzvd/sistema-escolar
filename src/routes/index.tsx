import { Route, Routes as ReactRoutes, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, LoginAluno, LoginProfessor, Private } from "../pages"
import { RequireAuth } from "../contexts";
import { Boletim } from "../pages/LoginAluno/components/Boletim";
import { DiarioDeClasse } from "../pages/LoginAluno/components/DiarioDeClasse";

const StudentLayout = () =>{
  <>
    
  </>
}

export function AppRoutes() {
  return (
    <Router>
      <ReactRoutes>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<Login />} />
        <Route path="/signin-student" element={ <LoginAluno /> } />
        <Route path="/boletim" element={ <Boletim /> } />
        <Route path="/diario-classe" element={ <DiarioDeClasse /> } />
        <Route path="/signin-teacher" element={ <LoginProfessor /> } />
        <Route path="/private" element={ <RequireAuth> <Private/> </RequireAuth> } />
      </ReactRoutes>
    </Router>
  );
}
