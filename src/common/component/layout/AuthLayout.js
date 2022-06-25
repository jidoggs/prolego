import React, {   useState } from "react";
import { Navigate, Outlet, useLocation,  } from "react-router-dom";
import Onboarding from "../../../modules/auth/onboard/Onboarding";
import Splash from "../../../modules/auth/onboard/Splash";
import { fetchUserToken } from "../../service/storage";
import { renderSwitch } from "../../utils/helper";
import Logo from "../customIcons/Logo";

function AuthLayout() {
  const { pathname } = useLocation();
  // const navigate = useNavigate();

  const userStatus = localStorage.getItem("newUser") ? false : true;
  const [newUser, setNewUser] = useState(userStatus);
  const [showSplash, setShowSplash] = useState(newUser);
  const token = fetchUserToken();

  const newUserHandler = () => {
    setNewUser(false);
  };

  const hideSplashHandler = () => {
    setShowSplash(false);
  };

  // useEffect(() => {
  //   if (newUser === true) {
  //     navigate("/");
  //   }
  //   if (newUser === false && pathname !== "/auth/signup") {
  //     navigate("/auth/login");
  //   }
  // }, []); //eslint-disable-line

  if (token) {
    return <Navigate to={"/admin/dashboard"} />;
  }

  return (
    <div className="authShell">
      {newUser ? (
        showSplash ? (
          <Splash
            hideSplashHandler={hideSplashHandler}
            showSplash={showSplash}
          />
        ) : (
          <Onboarding newUserHandler={newUserHandler} newUser={newUser} />
        )
      ) : (
        <>
          <Logo className="authShell__logo" />
          <div className="authShell__form">
            <Outlet />
          </div>
          {renderSwitch(pathname)}
        </>
      )}
    </div>
  );
}

export default AuthLayout;
