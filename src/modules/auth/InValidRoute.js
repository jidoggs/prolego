import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../common/component/CustomButton/CustomButton";

function InValidRoute() {
  const navigate = useNavigate();
  return (
    <>
      <div className="invalidroute">
        <div className="invalidroute__text">
          <h1 className="invalidroute__text--headline">404</h1>
          <p className="invalidroute__text--subheadline">PAGE NOT FOUND</p>
          <p className="invalidroute__text--body">
            Looks like you are lost. The link you entered may be inaccurate or
            invalid. Check the link and try again.
          </p>
          <CustomButton
            type="button"
            actionName="Go back home"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="invalidroute__image"></div>
      </div>
    </>
  );
}

export default InValidRoute;
