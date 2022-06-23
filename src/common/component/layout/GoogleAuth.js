import { useGoogleOneTapLogin } from "@react-oauth/google";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserInfo, loginwithgoogle } from "../../../modules/auth/service";
import { notloading } from "../../redux/reducer/loading";
import { storeUserToken } from "../../service/storage";

function GoogleAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useGoogleOneTapLogin({
    onSuccess: (resp) => {
      loginwithgoogle(resp.credential)
        .then((res) => {
          storeUserToken(res.token);
          fetchUserInfo(res.data?.id);
          dispatch(notloading());
          navigate("/admin/dashboard");
        })
        .catch((err) => {
          dispatch(notloading());
          console.log(err);
        });
    },
    onError: (res) => console.log(res, "useerr"),
    cancel_on_tap_outside: false,
    promptMomentNotification: (e) => {
      if (e.getNotDisplayedReason() === "suppressed_by_user") {
        dispatch(notloading());
      }

      if (
        e.getSkippedReason() === "tap_outside" ||
        e.getSkippedReason() === "user_cancel"
      ) {
        dispatch(notloading());
      }
    },
  });

  return <></>;
}

export default GoogleAuth;
