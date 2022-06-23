import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DashboardIcon from "../customIcons/DashboardIcon";
import DateIcon from "../customIcons/DateIcon";
import Logo from "../customIcons/Logo";
import LogoutIcon from "../customIcons/LogoutIcon";
import PredictionIcon from "../customIcons/PredictionIcon";
import SettingIcon from "../customIcons/SettingIcon";
import StudentIcon from "../customIcons/StudentIcon";
import {  clearUserDetails } from "../../service/storage";

function SideNav() {
  const navigate = useNavigate()
  return (
    <header className="adminShell__header">
      <Logo className="adminShell__header--logo" />
      <nav className="navigation">
        <ul className="navigationList">
          <li>
            <NavLink
              to={"dashboard"}
              className={({ isActive }) =>
                isActive ? "navigationList__itm-active" : "navigationList__itm"
              }
            >
              <DashboardIcon />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"prediction"}
              className={({ isActive }) =>
                isActive ? "navigationList__itm-active" : "navigationList__itm"
              }
            >
              <PredictionIcon />
              <span>Prediction</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"my_student"}
              className={({ isActive }) =>
                isActive ? "navigationList__itm-active" : "navigationList__itm"
              }
            >
              <StudentIcon />
              <span>My Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"attendance"}
              className={({ isActive }) =>
                isActive ? "navigationList__itm-active" : "navigationList__itm"
              }
            >
              <DateIcon />
              <span>Attendance</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"setting"}
              className={({ isActive }) =>
                isActive ? "navigationList__itm-active" : "navigationList__itm"
              }
            >
              <SettingIcon />
              <span>Setting</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={() => {clearUserDetails(); navigate("/auth/login")}} className="adminShell__header--btn">
        <LogoutIcon />
        <span>Log Out</span>
      </button>
    </header>
  );
}

const MemSide = React.memo(SideNav);
export default MemSide;
