import { Route, Routes } from "react-router-dom";
import AdminLayout from "./common/component/layout/AdminLayout";
import AuthLayout from "./common/component/layout/AuthLayout";
import Attendance from "./modules/admin/Attendance";
import Dashboard from "./modules/admin/Dashboard";
import MyStudent from "./modules/admin/MyStudent";
import Prediction from "./modules/admin/Prediction";
import Setting from "./modules/admin/Setting";
import StudentDetail from "./modules/admin/StudentDetail";
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

      <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="my_student" element={<MyStudent />} />
        <Route path="my_student/:student" element={<StudentDetail />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="setting" element={<Setting />} />
        <Route path="prediction" element={<Prediction />} />
      </Route>

      <Route path="*" element={<InValidRoute />} />
    </Routes>
  );
}

export default App;
