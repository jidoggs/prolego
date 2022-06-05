import React, { useState } from "react";
import CustomButton from "../../common/component/CustomButton";
import EyesIcon from "../../common/component/customIcons/EyesIcon";
import GoogleIcon from "../../common/component/customIcons/GoogleIcon";

function SignUp() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [signUpForm, setSignUpForm] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div className="page__title">
        <h1 className="page__title--headline">Create a secure account</h1>
      </div>
      <form
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
        className="signUpForm"
      >
        <div className="inputWrapper">
          <label htmlFor="signUpFirstName" className="authLabel">
            Email
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="signUpFirstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={signUpForm.firstName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="signUpLastName" className="authLabel">
            Email
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="signUpLastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={signUpForm.lastName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="signUpEmail" className="authLabel">
            Email
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="signUpEmail"
            type="email"
            placeholder="Email"
            name="email"
            value={signUpForm.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="signUpPassword" className="authLabel">
            Password
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="signUpPassword"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            name="password"
            value={signUpForm.password}
            onChange={onChangeHandler}
          />
          <EyesIcon
            onClick={() => setShowPassword(!showPassword)}
            className="authInput__icon"
          />
        </div>
        <p className="formBreaker">OR</p>
        <CustomButton
          icon={<GoogleIcon />}
          iconOrientation="left"
          variant="OUTLINE"
          actionName="Sign up with your Google account"
          type="button"
          onClick={() => null}
        />
        <div className="signUpTerms">
          <label htmlFor="terms" className="signUpTerms__label">
            By proceeding to create your account, you are agreeing to our
            <span> Terms & Conditions</span>
          </label>
          <input
            type="checkbox"
            checked={termsAgreed}
            onChange={() => setTermsAgreed(!termsAgreed)}
            name="terms"
            id="terms"
          />
        </div>
        <CustomButton
          disabled={!termsAgreed}
          actionName="Create Account"
          type="submit"
          onClick={() => null}
        />
      </form>
    </>
  );
}

export default SignUp;
