import React, { useState } from "react";
import CustomButton from "../../common/component/CustomButton/CustomButton";
import EyesIcon from "../../common/component/customIcons/EyesIcon";
import GoogleIcon from "../../common/component/customIcons/GoogleIcon";
import { fetchUserInfo, signup } from "./service";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { isloading, notloading } from "../../common/redux/reducer/loading";
import { storeUserToken } from "../../common/service/storage";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "../../common/component/layout/GoogleAuth";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [allowgoogleauth, setAllowgoogleauth] = useState(false);
  const loader = useSelector((state) => state.loadingState.apploadingstate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allowgoogle = () => { 
    setAllowgoogleauth(!allowgoogleauth)
    dispatch(isloading());
   }

  const signupSchema = Yup.object().shape({
    firstname: Yup.string().required("firstname is Required"),
    lastname: Yup.string().required("lastname is Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .required("Password is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(isloading());
      signup(values)
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
    validationSchema: signupSchema,
  });
  return (
    <>
      <div className="page__title">
        <h1 className="page__title--headline">Create a secure account</h1>
      </div>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
        className="signUpForm"
      >
        <div className="inputWrapper">
          <label htmlFor="signUpfirstname" className="authLabel">
            First Name
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="signUpfirstname"
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <p className="error">{formik.errors.firstname}</p>
          ) : null}
        </div>
        <div className="inputWrapper">
          <label htmlFor="signUplastname" className="authLabel">
            Last Name
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="signUplastname"
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <p className="error">{formik.errors.lastname}</p>
          ) : null}
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <EyesIcon
            onClick={() => setShowPassword(!showPassword)}
            className="authInput__icon"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="error">{formik.errors.password}</p>
          ) : null}
        </div>
        <p className="formBreaker">OR</p>
        {allowgoogleauth && <GoogleAuth />}
        <CustomButton
          icon={<GoogleIcon />}
          disabled={loader}
          iconOrientation="left"
          variant="OUTLINE"
          actionName="Sign up with your Google account"
          type="button"
          onClick={ allowgoogle}
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
          disabled={!termsAgreed || loader}
          actionName="Create Account"
          type="submit"
          onClick={() => null}
        />
      </form>
    </>
  );
}

export default SignUp;
