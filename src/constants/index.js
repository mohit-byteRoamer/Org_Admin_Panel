const localDataManagerConst = {
  access_token: "access_token",
  user_id: "user_id",
  userName: "userName",
  userRole: "artist",
};

const status = {
  Upcoming: { text: "Upcoming", textColor: "text-blue-500", bgColor: "bg-blue-50" },
  Ongoing: { text: "Ongoing", textColor: "text-yellow-500", bgColor: "bg-yellow-50" },
  Completed: { text: "Completed", textColor: "text-green-500", bgColor: "bg-green-50" },
  Canceled: { text: "Cancelled", textColor: "text-red-500", bgColor: "bg-red-50" },
};


const getStatusColors = (typeStatus) => {
  return status[typeStatus];
};

export { localDataManagerConst, status, getStatusColors };
