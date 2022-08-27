import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Login } from "../containers/Login";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import "../styles/global.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery" element={<RecoveryPassword />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
