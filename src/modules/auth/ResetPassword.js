import React, { useState } from "react";
import CustomButton from "../../common/component/CustomButton/CustomButton";

function ResetPassword() {
  const initialState = {
    code: "",
    password: "",
    confirmPassword: "",
  };
  const [resetPasswordForm, setResetPasswordForm] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setResetPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const {code, password, confirmPassword} = resetPasswordForm;
    if (password === confirmPassword && code !== "") {
      console.log(resetPasswordForm)
    }
  };

  return (
    <>
      <div className="page__title">
        <h1 className="page__title--headline">Reset Password?</h1>
        <p className="page__title--subheadline">
        Enter reset code and your new password
        </p>
      </div>
      <form autoComplete="off" onSubmit={onSubmitHandler} className="signUpForm">
        <div className="inputWrapper">
          <label htmlFor="resetCode" className="authLabel">
          Enter code
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="resetCode"
            type="text"
            placeholder="Enter code"
            name="code"
            value={resetPasswordForm.code}
            onChange={onChangeHandler}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="resetPassword" className="authLabel">
          New password
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="resetPassword"
            type="password"
            placeholder="New password"
            name="password"
            value={resetPasswordForm.password}
            onChange={onChangeHandler}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="confirmPassword" className="authLabel">
          Enter code
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="confirmPassword"
            type="password"
            placeholder="Retype new password"
            name="confirmPassword"
            value={resetPasswordForm.confirmPassword}
            onChange={onChangeHandler}
          />
        </div>
        <CustomButton onClick={() => null} actionName="Reset Password" type="submit" />
      </form>
    </>
  );
}

export default ResetPassword;
