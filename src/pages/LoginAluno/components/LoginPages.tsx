import { Routes, Route } from "react-router-dom";
import { DiarioDeClasse, Notas } from ".";

export default function LoginPages() {
  return (
    <>
      <Routes>
        <Route path="/signin-student" element={<Notas />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/diario-classe" element={<DiarioDeClasse />} />
      </Routes>
      <h1></h1>
    </>
  );
}
