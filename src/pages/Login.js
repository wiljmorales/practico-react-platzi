import React from "react";
import '../styles/Login.scss'

export const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="tittle">Create a new password</h1>
        <p className="subtittle">Enter a new password for you account</p>

        <form action="" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />

          <label htmlFor="new-password" className="label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input input-password"
          />

          <input
            type="submit"
            value="Confirm"
            className="primary-button confirm-button"
          />
        </form>
      </div>
    </div>
  );
};
