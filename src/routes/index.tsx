import { Route, Routes as ReactRoutes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login";
import { LoginCopy } from "../pages/LoginCopy";

export function Routes() {
  return (
    <ReactRoutes>
      <Route index element={<Home />} />
      <Route path="sign-up" element={<Login />} />
      <Route path="sign-up-copy" element={<LoginCopy />} />
    </ReactRoutes>
  );
}
