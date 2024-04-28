import { makeRequest } from "../../../service/axios/apiMethods";

const OUTLET = "outlet";

export const bookAppointment = (data) => {
  return makeRequest({
    method: "post",
    url: `/${OUTLET}/book-appointment`,
    data,
  });
};

export const reqGetOnGoingSessions = (data) => {
  const payload = {
    id: data.id,
  };
  data.onLoad(true);
  return makeRequest({
    method: "post",
    url: `/${OUTLET}/ongoing-sessions`,
    data: payload,
  });
};

export const reqGetAppointmentsDetails = (data) => {
  const payload = {
    id: data.id,
  };
  data?.onLoad && data?.onLoad(true);
  return makeRequest({
    method: "post",
    url: `/${OUTLET}/appointment-details`,
    data: payload,
  });
};

export const cancelSessions = (data) => {
  const payload = {
    ...data.payload,
  };
  data.onLoad(true);
  return makeRequest({
    method: "post",
    url: `/${OUTLET}/cancel-session`,
    data: payload,
  });
};

export const completedSession = (data) => {
  const payload = {
    ...data.payload,
  };
  data.onLoad(true);
  return makeRequest({
    method: "post",
    url: `/${OUTLET}/complete-session`,
    data: payload,
  });
};

export const completedSessionListAPI = (data) => {
  const payload = {
    id: data.id,
  };
  data.onLoad(true);
  return makeRequest({
    method: "post",
    url: `/${OUTLET}/completed-list`,
    data: payload,
  });
};
