import React, { useState } from 'react'
import CustomButton from '../../common/component/CustomButton'

function ForgotPassword() {

  const [email, setEmail] = useState("")

  const onSubmitHandler = (e) => {  
    e.preventDefault()
  }

  return (
    <>
      <div className="page__title">
        <h1 className="page__title--headline">Forgot Password?</h1>
        <p className="page__title--subheadline">Enter your email to reset your password</p>
      </div>
      <form
        autoComplete="off"
        onSubmit={onSubmitHandler}
        className="loginForm"
      >
        <div className="inputWrapper">
          <label htmlFor="resetEmail" className="authLabel">
            Email
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="resetEmail"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <CustomButton onClick={() => null}  actionName="Reset Password" type="submit" />
      </form>
    </>
  )
}

export default ForgotPassword