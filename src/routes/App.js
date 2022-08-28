import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { Login } from "../pages/Login";
import { RecoveryPassword } from "../pages/RecoveryPassword";
import { NotFound } from "../pages/NotFound";
import "../styles/global.css";
import { NewPassword } from "../pages/NewPassword";
import { CreateAccount } from "../pages/CreateAccount";
import { ProductList } from "../pages/ProductList";
import { Orders } from "../pages/Orders";
import { MyAccount } from "../pages/MyAccount";
import { Checkout } from "../pages/Checkout";
import { SendEmail } from "../pages/SendEmail";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orders" element={<Orders />} />
          <Route path="create" element={<CreateAccount />} />
          <Route path="login" element={<Login />} />
          <Route path="recovery" element={<RecoveryPassword />} />
          <Route path="send-email" element={<SendEmail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
