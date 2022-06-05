import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../common/component/CustomButton";
import EyesIcon from "../../common/component/customIcons/EyesIcon";
import GoogleIcon from "../../common/component/customIcons/GoogleIcon";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="page__title">
        <h1 className="page__title--headline">Login to your account</h1>
      </div>
      <form
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
        className="loginForm"
      >
        <div className="inputWrapper">
          <label htmlFor="loginEmail" className="authLabel">
            Email
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="loginEmail"
            type="email"
            placeholder="Email"
            name="email"
            value={loginInfo.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="loginPassword" className="authLabel">
            Password
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="loginPassword"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            name="password"
            value={loginInfo.password}
            onChange={onChangeHandler}
          />
          <EyesIcon
            onClick={() => setShowPassword(!showPassword)}
            className="authInput__icon"
          />
        </div>
        <div className="loginActions">
          <div className="loginCTA">
            <div className="loginCTA__trustDevice">
              <label htmlFor="trustDevice">Keep me logged in</label>
              <input
                type="checkbox"
                checked={null}
                onChange={() => null}
                name="trustDevice"
                id="trustDevice"
              />
            </div>
            <Link
              className="loginCTA__forgotPassword"
              to="/auth/password_reset_input"
            >
              Forgot password?
            </Link>
          </div>
          <CustomButton
            icon={<GoogleIcon />}
            iconOrientation="left"
            variant="OUTLINE"
            actionName="Sign up with your Google account"
            type="button"
            onClick={() => null}
          />
          <CustomButton
            actionName="Log In"
            type="submit"
            onClick={() => null}
          />
        </div>
      </form>
    </>
  );
}

export default Login;
