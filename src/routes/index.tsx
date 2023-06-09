import { Route, Routes , BrowserRouter as Router } from "react-router-dom";
import { Home, Login, LoginAluno, LoginProfessor, LoginAdm } from "src/pages"
import { RequireAuth } from "src/contexts";
import { DadosPessoais, DiarioDeClasse, Notas, Relatorio, BemVindoAluno} from "src/pages/Private/LoginAluno/pages";
import { Cadastros, Cadastrar, BemVindoAdm } from "src/pages/Private/LoginAdm/pages";
import { CadastroAluno, CadastroOptions, CadastroProfessor, CadastroResponsavel } from "src/pages/Private/LoginAdm/pages/Cadastrar/components";
import { DadosPessoaisProfessor, DiarioDeClasseProfessor, NotasProfessor, RelatorioProfessor } from "src/pages/Private/LoginProfessor/pages";
import { BemVindoProfessor } from "src/pages/Private/LoginProfessor/pages/BemVindoProfessor";
import { LoginResponsavel } from "src/pages/Private/LoginResponsavel";
import { BemVindoResponsavel, DadosPessoaisResponsavel, DiarioDeClasseResponsavel, NotasResponsavel, RelatorioResponsavel } from "src/pages/Private/LoginResponsavel/pages";

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

        <Route path="parent" element={ <RequireAuth> <LoginResponsavel/></RequireAuth>}>
          <Route index element={<BemVindoResponsavel/>}/>
          <Route path="notas" element={<NotasResponsavel/>}/>
          <Route path="diario-classe" element={<DiarioDeClasseResponsavel/>}/>
          <Route path="dados-pessoais" element={<DadosPessoaisResponsavel/>}/>
          <Route path="relatorio-disciplina" element={<RelatorioResponsavel/>}/>
        </Route>

        <Route path="adm" element={ <RequireAuth> <LoginAdm/></RequireAuth>}>
         
          <Route index element={<BemVindoAdm/>}/>
          <Route path="records" element={<Cadastros/>}/>

          <Route path="register" element={<Cadastrar/>}>
            <Route index element={<CadastroOptions/>}/>
            <Route path="student" element={<CadastroAluno/>}/>
            <Route path="parent" element={<CadastroResponsavel/>}/>
            <Route path="teacher" element={<CadastroProfessor/>}/>
          </Route>
        </Route>

        <Route path="teacher" element={ <RequireAuth> <LoginProfessor/></RequireAuth>}>
          <Route index element={<BemVindoProfessor/>}/>
          <Route path="notas" element={<NotasProfessor/>}/>
          <Route path="diario-classe" element={<DiarioDeClasseProfessor/>}/>
          <Route path="dados-pessoais" element={<DadosPessoaisProfessor/>}/>
          <Route path="relatorio-disciplina" element={<RelatorioProfessor/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
