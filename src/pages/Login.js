import React, { useRef } from "react";
import '../styles/Login.scss'

import logo from '@assets/logos/logo_yard_sale.svg'

export const Login = () => {
  const form = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data.email)
  }

  return (
    <div className="Login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="" ref={form} className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a> 
        </form>
        <button className="secondary-button signup-button">Sing up</button>
      </div>
    </div>
  );
};
