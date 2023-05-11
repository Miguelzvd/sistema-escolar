import { Route, Routes as ReactRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function Routes() {
  return (
    <ReactRoutes>
      <Route index element={<Home />} />
      <Route path="sign-up" element={<Login />} />
      <Route path="sign-up" element={<Login />} />
    </ReactRoutes>
  );
}
