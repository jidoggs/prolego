import React, { useId } from "react";
import { useField } from "formik";

const CustomAuthInput = ({ label, icon, ...props }) => {
  const id = useId();
  const [field, meta] = useField(props);
  return (
    <div className="inputWrapper">
      <label htmlFor={id} className="authLabel">
        {label}
      </label>
      <input className="authInput" id={id} {...field} {...props} />
      {icon}
      {meta.touched && meta.error ? (
        <p className="error">{meta.error}</p>
      ) : null}
    </div>
  );
};


export default CustomAuthInput