import { localDataManagerConst } from "../../constants";


const LocalDataManager = {
  setAccessToken(token) {
    return localStorage.setItem(localDataManagerConst.access_token, token);
  },
  getAccessToken() {
    return localStorage.getItem(localDataManagerConst.access_token) || "";
  },
  setUserId(userId) {
    return localStorage.setItem(localDataManagerConst.user_id, userId);
  },
  getUserId() {
    return localStorage.getItem(localDataManagerConst.user_id) || "";
  },
  setUserName(userName) {
    return localStorage.setItem(localDataManagerConst.userName, userName);
  },
  getUserName() {
    return localStorage.getItem(localDataManagerConst.userName) || "";
  },
  setUserRole(userRole) {
    return localStorage.setItem(localDataManagerConst.userRole, userRole);
  },
  getUserRole() {
    return localStorage.getItem(localDataManagerConst.userRole) || "";
  },
  removeData() {
    return localStorage.clear();
  },
};

export default LocalDataManager;
