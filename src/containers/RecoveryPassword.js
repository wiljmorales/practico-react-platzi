import React from 'react'
import '../styles/RecoveryPassword.scss'

export const RecoveryPassword = () => {
  return (
    <div class="login">
    <div class="form-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo" />
      <h1 class="tittle">Email has beem sent!</h1>
      <p class="subtittle">Please check your inbox for instructions on how to reset the password</p>
      <div class="email-image">
        <img src="./icons/email.svg" alt="email" />
      </div>
      <button class="primary-button login-button">Login</button>
      <p class="resend">
        <span>Didn't receive the email? </span>
        <a href="/">Resend</a>
      </p>
    </div>
  </div>
  )
}
