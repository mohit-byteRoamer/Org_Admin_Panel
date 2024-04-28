import { makeRequest } from "../../../service/axios/apiMethods";

const OUTLET = "outlet";

export const loginAPI = (data) => {
  return makeRequest({
    method: "post",
    url: `/${OUTLET}/login`,
    data,
  });
};
