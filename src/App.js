import { Route, Routes } from "react-router-dom";
import AuthLayout from "./common/component/layout/AuthLayout";
import ForgotPassword from "./modules/auth/ForgotPassword";
import InValidRoute from "./modules/auth/InValidRoute";
import Login from "./modules/auth/Login";
import Onboarding from "./modules/auth/onboard/Onboarding";
import ResetPassword from "./modules/auth/ResetPassword";
import SignUp from "./modules/auth/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/password_reset_input" element={<ForgotPassword />} />
        <Route path="/auth/password_reset" element={<ResetPassword />} />
        <Route path="/" element={<Onboarding />} />
      </Route>
        <Route path="*" element={<InValidRoute />} />
    </Routes>
  );
}

export default App;
