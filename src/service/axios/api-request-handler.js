import { navigate } from "../../utils/common-function";
import { message } from "antd";

const APIRequestHandler = (
  status,
  apiMessage,
  navigatePath,
  navigateData,
  loaderHandler,
  errorNavigate = false,
  successNavigate = false,
  showToast = true
) => {
    debugger
  if (status == 0) {
    showToast && message.error(apiMessage || "Some thing wrong");
    navigatePath && errorNavigate && navigate(navigatePath, navigateData);
  } else if (status == 1) {
    showToast && message.success(apiMessage);
    navigatePath && successNavigate && navigate(navigatePath, navigateData);
  }
  loaderHandler(false);
};

export { APIRequestHandler };
