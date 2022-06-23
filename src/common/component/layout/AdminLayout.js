import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { fetchUserToken } from "../../service/storage";
import Header from "./Header";
import SideNav from "./SideNav";

function AdminLayout() {
  const token = fetchUserToken();

  if (!token) {
    return <Navigate to={"/auth/login"} />;
  }

  return (
    <div className="adminShell">
      <SideNav />
      <main className="adminShell__body">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
