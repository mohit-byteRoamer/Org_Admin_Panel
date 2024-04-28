const statusCodes = {
  Success: 1,
  Failure: 0,
  Unauthenticated: 2,
};

const multipartHeader = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
};

const jsonHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const ApiErrorMessages = {
  Success: "Success",
  Failure: "Failure",
  Unauthenticated: "User is not authenticated",
  NotFound: "Resource not found",
  Unauthorized: "Unauthorized access",
  InternalServerError: "Internal server error",
};

export { statusCodes, multipartHeader, jsonHeader };
