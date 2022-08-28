import React from "react";
import '../styles/SendEmail.scss'

export const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="send-email-logo" />
        <h1 className="tittle">Email has beem sent!</h1>
        <p className="subtittle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src="./icons/email.svg" alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email? </span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};
