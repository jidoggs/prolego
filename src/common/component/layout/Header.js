import React from "react";
import NotificationIcon from "../customIcons/NotificationIcon";

function Header() {
  return (
    <header className="dashboard__header adminShell__body--header">
      <nav className="dashboard__header_nav">
        <ul className="dashboard__header_navList">
          <li>
            <NotificationIcon />
          </li>
          <li>
            <span>Adams</span>
            <div
              role="img"
              aria-roledescription="user avatar"
              className="dashboard__avatar"
            ></div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
