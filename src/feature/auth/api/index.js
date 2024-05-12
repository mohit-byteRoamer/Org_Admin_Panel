import { makeRequest } from "../../../service/axios/apiMethods";

const OUTLET = "outlet";

export const loginAPI = (data) => {
  return makeRequest({
    method: "post",
    url: `/${OUTLET}/login`,
    data,
  });
};

export const signUpApi = (data) => {
  return makeRequest({
    method: "post",
    url: `/${OUTLET}/signUp`,
    data,
  });
};

export const otpVerifyAPI = (data) => {
  return makeRequest({
    method: "post",
    url: `/${OUTLET}/verify-email-otp`,
    data,
  });
};
