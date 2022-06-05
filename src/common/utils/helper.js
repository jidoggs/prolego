import { Link } from "react-router-dom";

export const renderSwitch = (pathname) => {
  if (pathname.includes("login")) {
    return (
      <p className="authShell__switch">
        Don’t have an account? <Link to="/auth/signup">Sign up here</Link>
      </p>
    );
  }
  if (pathname.includes("signup")) {
    return (
      <p className="authShell__switch">
        Already have an account? <Link to="/auth/login">Log in here</Link>
      </p>
    );
  }
  if (pathname.includes("input")) {
    return (
      <p className="authShell__switch">
        <Link to="/auth/login">Back to Login</Link>
      </p>
    );
  }
};
