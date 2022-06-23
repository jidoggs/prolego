import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../common/component/CustomButton/CustomButton";

function Onboarding({newUserHandler,newUser}) {
  const navigate = useNavigate();


  const onBoardingBtnHandler = () => {
    newUserHandler();
    navigate("/auth/signup");
    localStorage.setItem("newUser", "true")
  };

  useLayoutEffect(() => {
   if (newUser === false) {
       navigate("/auth/login")
   }
  }, []) //eslint-disable-line
  

  return (
    <>
      <h1 className="onboarding__headline">Welcome to Prolego!</h1>
      <p className="onboarding__subheadline">
        A platform that takes into consideration the academic excellence of
        students. With the help of Prolego, you can now predict the academic
        performance of your students seamlessly and without hassles.
      </p>
      <CustomButton
        type="button"
        className="onboarding__btn"
        actionName="Get Started"
        onClick={onBoardingBtnHandler}
      />
      <div
        role={"img"}
        aria-roledescription="user in workspace"
        className="onboarding__img"
      ></div>
    </>
  );
}

export default Onboarding;
