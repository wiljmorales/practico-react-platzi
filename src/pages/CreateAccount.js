import React from "react";
import '../styles/CreateAccount.scss'

export const CreateAccount = () => {
  return (
    <div className="create-account">
      <div className="form-container">
        <h1 className="tittle">Create account</h1>
        <form action="" className="form">
          <div>
            <label htmlFor="name" className="label">
              name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Wilfredo"
              className="input input-name"
            />
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="email@example.com"
              className="input input-email"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
          </div>
          <input
            type="submit"
            value="Create"
            className="primary-button confirm-button"
          />
        </form>
      </div>
    </div>
  );
};
