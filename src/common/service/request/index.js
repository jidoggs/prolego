import axios from "axios";
import { API_URL, REQUEST_TIMEOUT } from "../config/constant";
// import Language from "../../utils/language/en";
import { fetchUserToken, clearData } from "../storage";

/** general headers **/
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

/** authorization header for logged in user **/
const setAuthorization = () => ({
  Authorization: `Bearer ${fetchUserToken()}`,
});

/** axios instance **/
const instance = axios.create({
  baseURL: API_URL,
  headers,
});

/** timeout configuration for axios instance **/
instance.defaults.timeout = REQUEST_TIMEOUT;

/** axios interceptor to trigger a logout on unauthorized error response code **/
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 307 || error.response.status === 403)
    ) {
      clearData();
      window.location.reload();
      return Promise.reject({
        status: 401,
        message: "Login session expired, please login again",
      });
    }

    return Promise.reject(
      error
        ? error.response
          ? error.response.data
          : error.response
          : null
        // : Language.NetworkErrorMessage.errorMessage
    );
  }
);

/** make an axios get request **/
export const makeGetRequest = (path) => instance.get(path);

/** make an axios post request **/
export const makePostRequest = (path, payload) => instance.post(path, payload);

/** make an axios request for a guest **/
export const makeUnauthorizedRequestWithHeadersAndPayload = async (
  method,
  url,
  data
) => {
  const response = await instance.request({
    method,
    url,
    data,
    headers,
  });
  return response;
};

/** make an axios request for logged-in user **/
export const makeAuthorizedRequestWithHeadersAndPayload = async (
  method,
  url,
  data = {}
) => {
  const response = await instance.request({
    method,
    url: url,
    data,
    headers: {
      ...headers,
      ...setAuthorization(),
    },
  });
  return response;
};

/** make an axios request to submit a file for a logged in user **/
export const makeRequestWithFormData = async (
  method,
  url,
  data,
  authorized
) => {
  /** create new formdata object **/
  let formData = new FormData();

  let headers = {
    "Content-Type": "multipart/form-data",
  };

  /** loop through and append all data to formdata object **/
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      let fieldData = data[key];
      formData.append(key, fieldData);
    }
  }

  if (authorized) {
    headers = { ...headers, ...setAuthorization() };
  }

  const response = await instance.request({
    method,
    url: url,
    data: formData,
    headers,
  });

  return response;
};
