import { statusCodes } from "../../constants/validations";
import APIKit from "./APIKit";

export const handleResponse = (response) => {
  console.log("handleResponse");
  if (response.status >= 200 && response.status < 400) {
    return {
      status: statusCodes.Success,
      result: response.data,
    };
  } else {
    return {
      status: statusCodes.Failure,
      result: { msg: response.data?.message || "Something went wrong." },
    };
  }
};

export const handleError = (error) => {
  if (!error.response) {
    return {
      status: statusCodes.Failure,
      result: { msg: "Timeout : server issue" },
    };
  } else if (error.response.status === 403 || error.response.status === 401) {
    return {
      status: statusCodes.Unauthenticated,
      result: { msg: error.response.data.message },
    };
  } else {
    return {
      status: statusCodes.Failure,
      result: { msg: error.response.data.message || "Something went wrong." },
    };
  }
};

export const makeRequest = ({ method, url, data }) => {
  return APIKit[method](url, data).then(handleResponse).catch(handleError);
};
