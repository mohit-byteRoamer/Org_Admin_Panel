import { makeRequest } from "../../../service/axios/apiMethods";

export const paymentListAPI = (data) => {
  const payload = {
    id: data.id,
  };
  data.onLoad(true);
  return makeRequest({
    method: "post",
    url: "/outlet/payment-list",
    data: payload,
  });
};
