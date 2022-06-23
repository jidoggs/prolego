import React, { useState } from "react";
import CustomButton from "../../common/component/CustomButton/CustomButton";
import EyesIcon from "../../common/component/customIcons/EyesIcon";
import GoogleIcon from "../../common/component/customIcons/GoogleIcon";
import { signup } from "./service";
import * as Yup from 'yup'
import { useFormik } from "formik";

function SignUp() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  
  const signupSchema = Yup.object().shape({
    firstName: Yup.string().required("Firstname is Required"),
    lastName: Yup.string().required("Lastname is Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .required("Password is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signup(values)
        .then((res) => console.log(res,"res"))
        .catch((err) => console.log(err,"err"));
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
        onSubmit={(e) => {e.preventDefault(); formik.handleSubmit()}}
        className="signUpForm"
      >
        <div className="inputWrapper">
          <label htmlFor="signUpFirstName" className="authLabel">
            First Name
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="signUpFirstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className="error">{formik.errors.firstName}</p>
          ) : null}
        </div>
        <div className="inputWrapper">
          <label htmlFor="signUpLastName" className="authLabel">
            Last Name
          </label>
          <input
            autoComplete="off"
            className="authInput"
            id="signUpLastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className="error">{formik.errors.lastName}</p>
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
