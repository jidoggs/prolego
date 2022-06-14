import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";

function AdminLayout() {
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
