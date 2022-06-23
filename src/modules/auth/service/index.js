// import { useDispatch } from "react-redux";
// import { STORAGE_KEYS } from "../../../common/service/config/constant";
import { ENDPOINTS } from "../../../common/service/config/endpoints";
import {
  makeAuthorizedRequestWithHeadersAndPayload,
  makeUnauthorizedRequestWithHeadersAndPayload,
} from "../../../common/service/request";
import {
  clearUserDetails,
  storeUserDetails,
} from "../../../common/service/storage";

/** log user in **/
export const login = (values) => {
  let endpoint = ENDPOINTS.auth.login;

  const data = JSON.stringify(values);

  // const dispatch = useDispatch()

  return makeUnauthorizedRequestWithHeadersAndPayload(
    endpoint.method,
    endpoint.url,
    data
  );
};

export const fetchUserInfo = (id) => {
  let endpoint = ENDPOINTS.auth.userInfo;
  return makeAuthorizedRequestWithHeadersAndPayload(
    endpoint.method,
    `${endpoint.url}${id}`
  )
    .then((res) => storeUserDetails({ ...res.data, loggedIn: true }))
    .catch((err) => console.log(err, "fetchUser"));
};

export const loginwithgoogle = (value) => {
  let endpoint = ENDPOINTS.auth.google;
  const data = JSON.stringify({credential:value});

  return makeUnauthorizedRequestWithHeadersAndPayload(
    endpoint.method,
    endpoint.url,
    data
  );
};

/** log user out **/
export const logout = () => {
  clearUserDetails();

  // localStorage.removeItem(STORAGE_KEYS.USER_DETAILS_STORAGE_KEY)

  // let user = {
  //   loggedIn: false,
  //   username: "",
  // };

  // return user;
};

/** Sign user up */

export const signup = (signupCredentials) => {
  let endpoint = ENDPOINTS.auth.signup;

  const data = JSON.stringify(signupCredentials);
  // console.log(data)

  return makeUnauthorizedRequestWithHeadersAndPayload(
    endpoint.method,
    endpoint.url,
    data
  );
};
