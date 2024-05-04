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

export const paymentDetailsAPI = (data) => {
  const payload = {
    id: data.id,
  };
  data.onLoad(true);
  return makeRequest({
    method: "post",
    url: "/outlet/payment-details",
    data: payload,
  });
};
