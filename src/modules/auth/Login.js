import { useFormik } from "formik";
// import second from 'react-goo'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../common/component/CustomButton/CustomButton";
import EyesIcon from "../../common/component/customIcons/EyesIcon";
import GoogleIcon from "../../common/component/customIcons/GoogleIcon";
import * as Yup from "yup";
import { fetchUserInfo, login, loginwithgoogle } from "./service";
import {
  // fetchUserDetails,
  // storeUserDetails,
  storeUserToken,
} from "../../common/service/storage";
import { useDispatch, useSelector } from "react-redux";
import { isloading, notloading } from "../../common/redux/reducer/loading";
import {  useGoogleLogin,  } from "@react-oauth/google";
import GoogleAuth from "../../common/component/layout/GoogleAuth";
// import GoogleLogin from "react-google-login";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [allowgoogleauth, setAllowgoogleauth] = useState(false);
  const dispatch = useDispatch();
  const networkRequest = useSelector(
    (state) => state.loadingState.apploadingstate
  );



  const navigate = useNavigate();

  const allowgoogle = () => { 
    setAllowgoogleauth(!allowgoogleauth)
   }

  const googleLogin = useGoogleLogin({
    onSuccess: (resp) => {
      console.log(resp);
      loginwithgoogle(resp.code)
        .then((res) => {
          storeUserToken(res.token);
          fetchUserInfo(res.data?.id);
          dispatch(notloading());
          navigate("/admin/dashboard");
        })
        .catch((err) => {
          dispatch(notloading());
          console.log(err);
        });
    },
    onError: (err) => {
      dispatch(notloading());
      console.log(err);
    },
    flow: "implicit",
  });

  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Too Short!")
      .required("Password is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(isloading());
      login(values)
        .then((res) => {
          storeUserToken(res.token);
          fetchUserInfo(res.data?.id);
          dispatch(notloading());
          navigate("/admin/dashboard");
        })
        .catch((err) => {
          dispatch(notloading());
          console.log(err, "auth");
        });
    },
    validationSchema: loginSchema,
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  const handleLogin = () => {
    dispatch(isloading());
    googleLogin();
  };

  return (
    <>
      <div className="page__title">
        <h1 className="page__title--headline">Login to your account</h1>
      </div>
      <form autoComplete="off" onSubmit={onSubmitHandler} className="loginForm">
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}
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
          {/* <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            text="signin_with"
          /> */}
          {allowgoogleauth && <GoogleAuth />}
          <CustomButton
            disabled={networkRequest}
            actionName="Log In"
            type="submit"
            onClick={() => null}
          />
          <CustomButton
            icon={<GoogleIcon />}
            disabled={networkRequest}
            iconOrientation="left"
            variant="OUTLINE"
            actionName="Sign up with your Google account"
            type="button"
            onClick={allowgoogle}
          />
        </div>
      </form>
    </>
  );
}

export default Login;
