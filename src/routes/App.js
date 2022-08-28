import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Login } from "../pages/Login";
import { RecoveryPassword } from "../pages/RecoveryPassword";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import "../styles/global.css";
import { NewPassword } from "../pages/NewPassword";
import { CreateAccount } from "../pages/CreateAccount";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="create" element={<CreateAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="recovery" element={<RecoveryPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
