import moment from "moment";

let navigateRef;

const createNavigateRef = (navigation) => (navigateRef = navigation);

const navigate = (route) => navigateRef(route);

const formatTimeTo12Hour = (timestamp) => {
  return moment(timestamp).format("hh:mm: A");
};

const formatDate = (timestamp) => {
  const parsedDate = moment(timestamp);
  return parsedDate.format("MMMM DD, YYYY");
};

const getDateNumber=(date)=>{
  const parsedDate = moment(date);
  return parsedDate.format("YYYY-MM-DD");
}

export { navigate, createNavigateRef, formatTimeTo12Hour, formatDate,getDateNumber };
