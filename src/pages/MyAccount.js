import React from "react";
import '../styles/MyAccount.scss';

export const MyAccount = () => {
  return (
    <div className="my-account">
      <div className="my-account-container">
        <h1 className="tittle">My account</h1>
        <form action="" className="form">
          <div>
            <label htmlFor="name" className="label">
              name
            </label>
            <p className="value">Camila Yokoo</p>
            <label htmlFor="email" className="label">
              Email
            </label>
            <p className="value">camilayokoo@gmail.com</p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p className="value">*********</p>
          </div>
          <input
            type="submit"
            value="Edit"
            className="secondary-button confirm-button"
          />
        </form>
      </div>
    </div>
  );
};
