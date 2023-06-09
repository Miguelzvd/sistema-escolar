import { Route, Routes , BrowserRouter as Router } from "react-router-dom";
import { Home, Login, LoginAluno, LoginProfessor, LoginAdm } from "../pages"
import { RequireAuth } from "../contexts";
import { DadosPessoais, DiarioDeClasse, Notas, Relatorio, BemVindoAluno} from "../pages/Private/LoginAluno/pages";
import { Cadastro, AtualizarCadastro, BemVindoAdm } from "../pages/Private/LoginAdm/pages";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signin" element={<Login />} />

        <Route path="student" element={ <RequireAuth> <LoginAluno/></RequireAuth>}>
          <Route index element={<BemVindoAluno/>}/>
          <Route path="notas" element={<Notas/>}/>
          <Route path="diario-classe" element={<DiarioDeClasse/>}/>
          <Route path="dados-pessoais" element={<DadosPessoais/>}/>
          <Route path="relatorio-disciplina" element={<Relatorio/>}/>
        </Route>

        <Route path="parent" element={ <RequireAuth> <LoginAluno/></RequireAuth>}>
          <Route index element={<Notas/>}/>
          <Route path="notas" element={<Notas/>}/>
          <Route path="diario-classe" element={<DiarioDeClasse/>}/>
          <Route path="dados-pessoais" element={<DadosPessoais/>}/>
          <Route path="relatorio-disciplina" element={<Relatorio/>}/>
        </Route>

        <Route path="adm" element={ <RequireAuth> <LoginAdm/></RequireAuth>}>
          <Route index element={<BemVindoAdm/>}/>
          <Route path="atualizar-cadastro" element={<Cadastro/>}/>
          <Route path="cadastro" element={<AtualizarCadastro/>}/>
        </Route>

        <Route path="teacher" element={ <RequireAuth> <LoginProfessor/></RequireAuth>}>
          <Route index element={<Notas/>}/>
          
        </Route>
      </Routes>
    </Router>
  );
}
